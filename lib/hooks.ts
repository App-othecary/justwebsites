import { useActiveSectionContext } from "@/app/components/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";



export function useSectionInview(sectionName:SectionName, threshold=0.75) {
     const {ref,inView }=useInView({
  threshold,
 });
 const{ setActiveSection, timeOfLastClick }=useActiveSectionContext();

 useEffect(()=>{
  if(inView && Date.now() - timeOfLastClick > 1000  && !inView){
    setActiveSection(sectionName);
  }
 },[inView, setActiveSection, timeOfLastClick, sectionName]);
 return {ref,

 };
}