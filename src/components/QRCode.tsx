import React from 'react';
import QRCode from 'qrcode.react';

export const WebsiteQR = () => {
  const websiteUrl = 'https://bootcamper.kr'; // 실제 도메인으로 변경

  return (
    <div className="flex justify-center items-center p-4">
      <QRCode 
        value={websiteUrl}
        size={256}
        level={'H'}
        includeMargin={true}
      />
    </div>
  );
}; 