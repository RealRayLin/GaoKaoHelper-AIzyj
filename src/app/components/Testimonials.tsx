'use client';

import { motion } from 'framer-motion';
import { Star, StarHalf, Quote } from 'tabler-icons-react';

const testimonialData = [
  {
    content: "AI志愿家帮我找到了最适合的大学和专业，预测的录取概率非常准确，我顺利被第一志愿录取了！推荐所有高考生使用。",
    name: "张同学",
    role: "2023届高考生",
    school: "已被清华大学录取",
    rating: 5
  },
  {
    content: "作为一名家长，我很欣赏AI志愿家的数据分析能力。它不仅考虑了分数因素，还根据孩子的兴趣和优势推荐了合适的专业，非常全面。",
    name: "李先生",
    role: "高考生家长",
    school: "孩子被人民大学录取",
    rating: 5
  },
  {
    content: "系统的志愿预测功能太棒了！它给我提供了冲稳保的选择，让我在填报志愿时多了很多保障。最后我被预测概率87%的学校录取了。",
    name: "陈同学",
    role: "2023届高考生",
    school: "已被南开大学录取",
    rating: 4.5
  },
  {
    content: "AI助手回答问题非常智能，解决了我很多关于专业选择的困惑。整个平台使用体验很流畅，设计也很友好，强烈推荐！",
    name: "王同学",
    role: "2023届高考生", 
    school: "已被上海交通大学录取",
    rating: 5
  },
  {
    content: "一开始对AI推荐持怀疑态度，但使用后发现推荐非常精准。系统提供的专业就业前景分析帮助我做出了更明智的选择。",
    name: "赵同学",
    role: "2023届高考生",
    school: "已被浙江大学录取",
    rating: 4.5
  },
  {
    content: "作为高中教师，我向很多学生推荐了AI志愿家。它的数据库非常全面，覆盖了全国各地高校的历年录取数据，非常可靠。",
    name: "刘老师",
    role: "高中班主任",
    school: "某重点中学",
    rating: 5
  }
];

const Testimonials = () => {
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={18} fill="#ff9d00" color="#ff9d00" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={18} fill="#ff9d00" color="#ff9d00" />);
    }
    
    return stars;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block text-[var(--primary)] font-semibold mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            用户见证
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            他们都在使用AI志愿家
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            来自全国各地考生、家长与教师的真实评价，见证AI志愿家的专业与高效
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[var(--secondary)] p-6 rounded-xl relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white">
                <Quote size={20} />
              </div>
              <div className="mb-4 flex">
                {renderRating(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-[var(--primary)]">{testimonial.school}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 