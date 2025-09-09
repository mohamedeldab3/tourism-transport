
import React from 'react';
import type { Testimonial } from '../types';
import { Icon } from './Icon';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex justify-center mt-2 text-warm-coral">
      {[...Array(fullStars)].map((_, i) => <Icon key={`full-${i}`} name="star" filled />)}
      {halfStar && <Icon name="star_half" filled />}
      {[...Array(emptyStars)].map((_, i) => <Icon key={`empty-${i}`} name="star" />)}
    </div>
  );
};


export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center">
      <img alt={`Avatar of ${testimonial.author}`} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" src={testimonial.avatarUrl} />
      <p className="text-deep-indigo italic">"{testimonial.comment}"</p>
      <RatingStars rating={testimonial.rating} />
      <p className="text-deep-indigo font-bold mt-2">{testimonial.author}</p>
    </div>
  );
};