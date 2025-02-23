import react_img from "/react.jpg"

interface Testimonial {
    quote: string;
    name: string;
    username: string;
    image: string;
  }
  
  import { Card } from "@/components/ui/card";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay";
  
  const testimonials: Testimonial[] = [
    {
      quote: "Nexus transformed my learning and networking. The mentors and premium content are game-changers!",
      name: "John Doe",
      username: "@johndoe",
      image: react_img
    },
    {
      quote: "The premium features on Nexus are worth it. I've gained so much knowledge and made great connections.",
      name: "Neha K",
      username: "@neha",
      image: react_img
    },
    {
      quote: "Nexus made professional networking easy and meaningful. The mentor sessions were invaluable!",
      name: "Ankit T",
      username: "@ankit",
      image: react_img
    },
    {
      quote: "Nexus has been a game-changer for my career. The mentors offer practical advice, and the premium content is top-notch.",
      name: "Vikram M",
      username: "@vikram",
      image: react_img
    },
    {
      quote: "Joining Nexus was the best decision for my professional growth. The community is incredible!",
      name: "Rajan S",
      username: "@rajan",
      image: react_img
    },
    {
      quote: "Nexus made networking so easy. I've made valuable connections and grown both professionally and personally.",
      name: "Sakshi J",
      username: "@sakshi",
      image: react_img
    }
  ];
  
  const TestimonialsSection: React.FC = () => {
    const topRowTestimonials = testimonials.filter((_, i) => i % 2 === 0);
    const bottomRowTestimonials = testimonials.filter((_, i) => i % 2 === 1);
  
    // Create duplicated arrays for infinite effect
    const extendedTopRow: Testimonial[] = [...topRowTestimonials, ...topRowTestimonials, ...topRowTestimonials];
    const extendedBottomRow: Testimonial[] = [...bottomRowTestimonials, ...bottomRowTestimonials, ...bottomRowTestimonials];
  
    // Create separate autoplay plugins with different delays for visual variety
    const pluginTop = Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    });
  
    const pluginBottom = Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    });
  
    return (
      <section className="py-20 relative overflow-hidden ">
        <h2 className="text-3xl font-bold text-center mb-16 ">Testimonials</h2>
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="space-y-6">
            {/* Top Row Carousel */}
            <Carousel 
              className="w-full overflow-visible"
              plugins={[pluginTop]}
              opts={{
                align: "start",
                loop: true,
                skipSnaps: false,
                containScroll: "trimSnaps"
              }}
            >
              <CarouselContent className="-ml-4">
                {extendedTopRow.map((testimonial: Testimonial, index: number) => (
                  <CarouselItem 
                    key={`top-${index}`} 
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="bg-black p-6 rounded-xl text-white h-full transform transition-all duration-300 hover:scale-105">
                      <p className="mb-4 text-sm">{testimonial.quote}</p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-full w-10 h-10"
                        />
                        <div>
                          <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-gray-400">{testimonial.username}</p>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
  
            {/* Bottom Row Carousel */}
            <Carousel 
              className="w-full overflow-visible"
              plugins={[pluginBottom]}
              opts={{
                align: "center",
                loop: true,
                skipSnaps: false,
                containScroll: "trimSnaps"
              }}
            >
              <CarouselContent className="-ml-4">
                {extendedBottomRow.map((testimonial: Testimonial, index: number) => (
                  <CarouselItem 
                    key={`bottom-${index}`} 
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="bg-black p-6 rounded-xl text-white h-full transform transition-all duration-300 hover:scale-105">
                      <p className="mb-4 text-sm">{testimonial.quote}</p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-full w-10 h-10"
                        />
                        <div>
                          <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-gray-400">{testimonial.username}</p>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    );
  };


export default TestimonialsSection;