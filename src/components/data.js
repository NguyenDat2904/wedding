export const heroImagesSlider = [
   'https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/a33b08a813ee02e7a4b7d72ce05d9e93.jpg',
   'https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/1f6f6347c9eec78781d536c34c177bb8.jpg',
   'https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/b0ccc21579cf9df6a113314b039ec33e.jpg',
];

export const groom = {
   name: 'Văn Đạt',
   full_name: 'Nguyễn Văn Đạt',
   father: 'Nguyễn Văn Tân',
   mother: 'Nguyễn Thị Tuyết',
   description:
      'Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phồ Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương gia đình. Với anh: “Gia đình là điểm tựa vững chắc nhất và là bến đỗ bình yên không đâu sánh bằng đối với mỗi con người. Đó luôn là nơi tràn ngập tình yêu thương để ta trở về.”',
   address: 'Xóm 7, Xã Hải Xuân, Huyện Hải Hậu, Tỉnh Nam Định',
   social: {
      facebook: 'https://facebook.com/brian.thanhdat',
      instagram: 'https://instagram.com/brian.thanhdat',
      twitter: 'https://twitter.com/brian.thanhdat',
   },
};
export const bride = {
   name: 'Phương Thảo',
   full_name: 'Trần Thị Phương Thảo',
   father: 'Trần Văn Khánh',
   mother: 'Nguyễn Thị Phượng',
   description:
      'Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là một người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên. Ngoài ra còn rất thích vẽ vời, nuôi mèo và nuôi ước mơ có cho mình một vườn hồng khoe sắc.',
   address: 'Số 93, đường  Bãi Sậy, phường Hiến Nam, thành phố Hưng Yên',
   social: {
      facebook: 'https://www.facebook.com/ThaoThao.2601',
      instagram: 'https://instagram.com/ThaoThao.2601',
      twitter: 'https://twitter.com/ThaoThao.2601',
   },
};
export const globalData = {
   groomName: groom.name,
   brideName: bride.name,
   weddingDate: '20 Tháng 10 2024',
};

export const aboutUsData = {
   title: 'We are Getting Married',
   description:
      'Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi. Chúng tôi muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết chúng tôi rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!',
   groom: { ...groom, image: 'https://cdn.biihappy.com/ziiweb/default/website/3b48bc6125ce6d186297a3e90a11085e.jpeg' },
   bride: { ...bride, image: 'https://cdn.biihappy.com/ziiweb/default/website/59b631f29bfb9f7cd20437d27ddbe4db.jpeg' },
};

export const Icon = {
   twoHearts: ({ className }) => {
      return (
         <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width={256}
            height={256}
            viewBox="0 0 256 256"
            xmlSpace="preserve"
         >
            <defs />
            <g
               style={{
                  stroke: 'none',
                  strokeWidth: 0,
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 10,
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: 1,
               }}
               transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
               <path
                  d="M 38.189 70.367 c -0.248 0 -0.5 -0.047 -0.744 -0.145 l -27.29 -10.94 c -8.274 -3.317 -12.306 -12.747 -8.99 -21.02 l 0 0 c 1.606 -4.008 4.677 -7.15 8.648 -8.848 c 3.693 -1.58 7.75 -1.733 11.524 -0.455 c 1.682 -3.611 4.597 -6.439 8.288 -8.018 c 3.971 -1.698 8.363 -1.748 12.372 -0.142 c 1.546 0.62 2.985 1.474 4.275 2.539 C 46.733 23.717 47 24.283 47 24.88 c 0 0.597 -0.267 1.163 -0.728 1.542 c -4.1 3.383 -5.525 8.973 -3.547 13.908 l 4.131 10.303 c 0.191 0.478 0.191 1.011 0 1.488 l -6.81 16.988 C 39.733 69.891 38.982 70.367 38.189 70.367 z M 16.168 32.104 c -1.623 0 -3.244 0.329 -4.782 0.987 c -2.988 1.278 -5.3 3.643 -6.508 6.659 l 0 0 c -2.496 6.226 0.539 13.323 6.765 15.819 l 25.434 10.196 l 5.768 -14.387 l -3.832 -9.559 c -2.301 -5.74 -1.137 -12.146 2.843 -16.669 c -0.435 -0.24 -0.884 -0.453 -1.346 -0.638 c -3.018 -1.209 -6.324 -1.173 -9.311 0.106 c -2.988 1.278 -5.299 3.642 -6.508 6.659 l -0.399 0.995 c -0.412 1.025 -1.577 1.52 -2.601 1.112 l -0.995 -0.399 C 19.232 32.397 17.699 32.104 16.168 32.104 z M 3.022 39.006 h 0.01 H 3.022 z"
                  style={{
                     stroke: 'none',
                     strokeWidth: 1,
                     strokeDasharray: 'none',
                     strokeLinecap: 'butt',
                     strokeLinejoin: 'miter',
                     strokeMiterlimit: 10,
                     fill: '#747ba9',
                     fillRule: 'nonzero',
                     opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
               />
               <path
                  d="M 51.811 70.367 c -0.794 0 -1.544 -0.476 -1.857 -1.257 L 39.013 41.819 c -1.607 -4.008 -1.557 -8.402 0.141 -12.372 s 4.84 -7.041 8.848 -8.648 c 4.007 -1.606 8.4 -1.557 12.372 0.142 c 3.691 1.579 6.606 4.406 8.289 8.018 c 3.773 -1.278 7.832 -1.124 11.523 0.455 l 0 0 c 3.972 1.699 7.043 4.842 8.647 8.849 c 1.607 4.007 1.558 8.401 -0.141 12.371 c -1.698 3.97 -4.841 7.042 -8.848 8.648 l -27.29 10.94 C 52.31 70.32 52.058 70.367 51.811 70.367 z"
                  style={{
                     stroke: 'none',
                     strokeWidth: 1,
                     strokeDasharray: 'none',
                     strokeLinecap: 'butt',
                     strokeLinejoin: 'miter',
                     strokeMiterlimit: 10,
                     fill: '#747ba9',
                     fillRule: 'nonzero',
                     opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
               />
            </g>
         </svg>
      );
   },
};
