// import React, { useState } from 'react';
// import './SixthPage.css';

// interface FAQItemProps {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItemProps[] = [
//   {
//     question: 'What do I do when I can’t reach Riley?',
//     answer: 'Riley is always accessible via the dashboard & mobile app. If you have issues, contact our support team.',
//   },
//   {
//     question: 'How will Riley help me with my parenting plan?',
//     answer: 'Riley uses AI to tailor suggestions and routines to your parenting style and goals.',
//   },
//   {
//     question: 'Do you offer a free trial?',
//     answer: 'Yes! We offer a 14-day free trial with full features so you can explore before committing.',
//   },
//   {
//     question: 'Can I use Riley on other family tracking devices?',
//     answer: 'Yes, Riley supports multiple device sync including tablets and smartwatches.',
//   },
//   {
//     question: 'Where can I use Riley?',
//     answer: 'Riley works anywhere with an internet connection and is optimized for mobile and web.',
//   },
// ];

// const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={`faq-item ${isOpen ? 'open' : ''}`}>
//       <div className="faq-question" onClick={() => setIsOpen(!isOpen)}> {/*when the user clicks on the question it toggles the isOpen state */}
//         <span>{question}</span>
//         <span className="faq-icon">{isOpen ? '-' : '+'}</span>
//       </div>
//       {isOpen && <div className="faq-answer">{answer}</div>}
//     </div>
//   );
// };

// const SixthPage: React.FC = () => {
    
//   return (
//     <div className="container">
//         <div className="faq-section">
//         <h2>FAQ</h2>
//         <p>Great answers are found in our FAQ! Here are some common questions to help you get started.</p>
//         {faqData.map((item, index) => (
//             <FAQItem key={index} question={item.question} answer={item.answer} />
//         ))}
//         </div>
//     </div>
//   );
// };

// export default SixthPage;

import React from 'react';
import { Collapse, Typography } from 'antd';
import type { CollapseProps } from 'antd';
import './SixthPage.css';

const { Title, Paragraph } = Typography;

const faqData: CollapseProps['items'] = [
  {
    key: '1',
    label: 'What do I do when I can’t reach Riley?',
    children: <p>Riley is always accessible via the dashboard & mobile app. If you have issues, contact our support team.</p>,
  },
  {
    key: '2',
    label: 'How will Riley help me with my parenting plan?',
    children: <p>Riley uses AI to tailor suggestions and routines to your parenting style and goals.</p>,
  },
  {
    key: '3',
    label: 'Do you offer a free trial?',
    children: <p>Yes! We offer a 14-day free trial with full features so you can explore before committing.</p>,
  },
  {
    key: '4',
    label: 'Can I use Riley on other family tracking devices?',
    children: <p>Yes, Riley supports multiple device sync including tablets and smartwatches.</p>,
  },
  {
    key: '5',
    label: 'Where can I use Riley?',
    children: <p>Riley works anywhere with an internet connection and is optimized for mobile and web.</p>,
  },
];

const SixthPage: React.FC = () => {
  return (
    <div className="container">
      <div className="faq-section">
        <Title level={2}>FAQ</Title>
        <Paragraph>
          Great answers are found in our FAQ! Here are some common questions to help you get started.
        </Paragraph>
        <Collapse
          accordion
          items={faqData}
          className="text-left bg-white"
          bordered={false}
        />
      </div>
    </div>
  );
};

export default SixthPage;

