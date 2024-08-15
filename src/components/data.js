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
