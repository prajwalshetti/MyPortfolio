import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import data from "@/data/projectData.json"
export function AnimatedTestimonialsDemo() {
    
    return <AnimatedTestimonials testimonials={data.projects} />;
}
