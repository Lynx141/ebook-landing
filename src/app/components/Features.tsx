import React from 'react';
import { motion as Motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Cpu, 
  Target, 
  BarChart, 
  Clock 
} from 'lucide-react';

const features = [
  {
    title: "Scaling Architecture",
    description: "Learn how to build systems that handle 10x growth without breaking or requiring more of your time.",
    icon: TrendingUp,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "The Talent Magnet",
    description: "Discover how to attract A-players to your team, even if you can't compete with big tech salaries yet.",
    icon: Users,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "AI Integration",
    description: "Practical ways to use modern AI tools to automate 40% of your administrative workload.",
    icon: Cpu,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Value Proposition",
    description: "Redefine your offer so it's a no-brainer for your dream clients and doubles your conversion rate.",
    icon: Target,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Data-Driven Decisions",
    description: "The only 5 metrics you actually need to track to know if your business is truly healthy.",
    icon: BarChart,
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    title: "Time Freedom",
    description: "A step-by-step delegation framework that gets you out of the 'owner's trap' for good.",
    icon: Clock,
    color: "bg-rose-50 text-rose-600"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container px-4 mx-auto text-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-stone-900 md:text-4xl">
            Everything You Need to Build a 7-Figure Business
          </h2>
          <p className="text-lg text-stone-600">
            Forget theories. This guide provides actionable templates and frameworks that you can implement starting today.
          </p>
        </Motion.div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 text-left transition-all border border-stone-100 rounded-2xl hover:shadow-xl hover:border-blue-100 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 mb-6 rounded-lg ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-stone-900 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-stone-600">
                {feature.description}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
