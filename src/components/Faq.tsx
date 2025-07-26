'use client'
import React from 'react';
import { Collapse } from 'antd';

const faqItems = [
  {
    key: '1',
    label: 'How far in advance should I book?',
    children: 'For newborn sessions, we recommend booking during your pregnancy, ideally in the second trimester. For other sessions, 2-4 weeks in advance is usually sufficient.'
  },
  {
    key: '2',
    label: 'What should I bring to the session?',
    children: 'For newborns, we provide all props and wraps. For other sessions, we\'ll discuss outfit options and any special items you\'d like to include.'
  },
  {
    key: '3',
    label: 'How long does a session take?',
    children: 'Newborn sessions typically take 2-3 hours, while other sessions usually take 1-2 hours. We work at your pace to ensure everyone is comfortable.'
  },
  {
    key: '4',
    label: 'When will I receive my photos?',
    children: 'You\'ll receive a sneak peek within 48 hours, and your full gallery will be ready within 2-3 weeks of your session.'
  }
];

export default function Faq({ className = '' }: { className?: string }) {
  return (
    <section className={`mt-16 sm:mt-20 ${className}`}>
      {/* Separator above FAQ */}
      <div className="w-full flex items-center justify-center mb-8">
        <div className="h-px w-24 bg-gray-400 rounded-full" />
        <span className="mx-4 text-gray-700 font-semibold tracking-wider uppercase text-lg">FAQ</span>
        <div className="h-px w-24 bg-gray-400 rounded-full" />
      </div>
      <div className="p-6 sm:p-8 backdrop-blur-sm">
        <div className="w-full mx-auto">
          <Collapse
            items={faqItems}
            className="bg-transparent border-none"
            expandIconPosition="end"
            style={{
              background: 'transparent',
              border: 'none'
            }}
          />
        </div>
        <style jsx>{`
          .ant-collapse {
            background: transparent !important;
            border: none !important;
          }
          .ant-collapse-item {
            background: rgba(244, 239, 202, 0.8) !important;
            border: 1px solid rgba(197, 173, 197, 0.3) !important;
            border-radius: 12px !important;
            margin-bottom: 12px !important;
          }
          .ant-collapse-header {
            font-weight: 600 !important;
            color: #374151 !important;
            padding: 16px 20px !important;
            font-size: 16px !important;
          }
          .ant-collapse-content {
            border-top: 1px solid rgba(197, 173, 197, 0.2) !important;
          }
          .ant-collapse-content-box {
            padding: 1rem !important; /* padding-4 */
            background: #a184a1 !important;
            color: #f4efca !important;
            font-size: 1.15rem !important;
            line-height: 1.7 !important;
            letter-spacing: 0.01em;
          }
          .ant-collapse-expand-icon {
            color: #C5ADC5 !important;
          }
          .ant-collapse-item-active .ant-collapse-header {
            color: #C5ADC5 !important;
          }
        `}</style>
      </div>
    </section>
  );
}
