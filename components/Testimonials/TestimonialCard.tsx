import { TestimonialType } from "@/services/store/slices/testimonialSlice";
import Image from "next/image";
import Rating from "../Rating";

export default function TestimonialCard({ testimonial }: { testimonial: TestimonialType }) {
    return (
        <div className="flex flex-col gap-3 p-4 rounded-lg max-w-[350px] border border-white/30">
            <h5>{testimonial.title}</h5>
            <p className="text-sm text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod.
            </p>
            <Rating rating={testimonial.rating || 0} />

            <div className="flex items-center gap-3">
                <div>
                    {testimonial.avatar && (
                        <Image src={testimonial.avatar} width={40} height={40} alt="avatar" loading="lazy" />
                    )}
                </div>
                <div>
                    <h6>{testimonial.name}</h6>
                    <p className="text-sm text-white/70">{testimonial.slug}</p>
                </div>
            </div>

            <div>
                <div className="max-w-[330px] max-h-[200px] relative overflow-hidden rounded-md">
                    {testimonial.image && (
                        <Image
                            src="/portfolio.png"
                            width={330}
                            height={200}
                            alt="avatar"
                            className="object-fill"
                            loading="lazy"
                        />
                    )}

                    {
                        // if video url is present
                        testimonial.videoUrl && (
                            <iframe
                                src="https://www.youtube.com/embed/FxAG_11PzCk"
                                title="YouTube video player"
                                allowFullScreen
                                className="w-full h-full object-fill"
                            ></iframe>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
