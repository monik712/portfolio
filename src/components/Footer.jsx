import React, { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    navigator.clipboard?.writeText('rmonik748@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-gray-100 px-4 pt-10 md:pt-16 pb-10 md:pb-12">
      <div className="site-container flex flex-col gap-16 md:gap-64">
        <div>
          <h2 className="text-2xl font-light leading-[1.1] tracking-[-2px] md:tracking-[-2.56px] text-[#111111]">
            Connect, collaborate, <br />
            or just say hello
          </h2>
          <div className="relative inline-block mt-1">
            <a
              href="mailto:rmonik748@gmail.com"
              onClick={handleCopyEmail}
              className="hidden md:block text-2xl font-light text-[#b2b2b2] hover:text-[#111111] transition-colors"
            >
              rmonik748@gmail.com
            </a>
            <a
              href="mailto:rmonik748@gmail.com"
              onClick={handleCopyEmail}
              className="block md:hidden text-2xl font-light text-[#b2b2b2] hover:text-[#111111] transition-colors"
            >
              Email
            </a>
            {copied && (
              <span className="absolute -top-7 left-0 text-xs bg-[#111111] text-white px-2 py-0.5 rounded shadow transition-all">
                Copied to clipboard!
              </span>
            )}
          </div>
        </div>

        <div>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Monik on LinkedIn (opens in new tab)"
            className="block text-2xl font-light text-[#b2b2b2] hover:text-[#111111] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
