
    "use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface Props {
    before: string;
    after: string;
    altBefore?: string;
    altAfter?: string;
    initialPosition?: number;
}

export default function BeforeAfterSlider({
    before,
    after,
    altBefore = "Before",
    altAfter = "After",
    initialPosition = 50,
}: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState(initialPosition);
    const [dragging, setDragging] = useState(false);

    const updatePosition = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        let percentage =
            ((clientX - rect.left) / rect.width) * 100;

        percentage = Math.max(0, Math.min(100, percentage));

        setPosition(percentage);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video overflow-hidden rounded-xl select-none"
            onMouseDown={() => setDragging(true)}
            onMouseMove={(e) => dragging && updatePosition(e.clientX)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onTouchStart={() => setDragging(true)}
            onTouchMove={(e) =>
                updatePosition(e.touches[0].clientX)
            }
            onTouchEnd={() => setDragging(false)}
        >
            {/* Before */}
            <Image
                src={before}
                alt={altBefore}
                fill
                className="object-cover"
            />

            {/* After */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{
                    clipPath: `inset(0 ${100 - position}% 0 0)`,
                }}
            >
                <Image
                    src={after}
                    alt={altAfter}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Divider */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white"
                style={{ left: `${position}%` }}
            >
                <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg flex items-center justify-center">
                    ↔
                </div>
            </div>

            {/* Labels */}
            <div className="absolute left-4 top-4 rounded bg-black/60 px-3 py-1 text-white text-sm">
                Sketch
            </div>

            <div className="absolute right-4 top-4 rounded bg-black/60 px-3 py-1 text-white text-sm">
                Final
            </div>
        </div>
    );
}

