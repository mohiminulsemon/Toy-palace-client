import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    const galleryImages = [
        'https://i.ytimg.com/vi/TnobLoKYg-I/maxresdefault.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/da28cdba-47e9-4c0e-8e7a-1a2758b6292f/dbho9pj-b26579fc-fe98-41da-b65f-234443b439ba.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RhMjhjZGJhLTQ3ZTktNGMwZS04ZTdhLTFhMjc1OGI2MjkyZlwvZGJobzlwai1iMjY1NzlmYy1mZTk4LTQxZGEtYjY1Zi0yMzQ0NDNiNDM5YmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GLXTN71THOFl-wMm2EC1oXDSYoIx6wH-VKsUDWaSm9M',
        'https://i.pinimg.com/736x/ad/44/ba/ad44ba10b7a25267a3f85f8eab00ca60.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72wtftIHMSGsgMX02j6wP7GLS6wiQ_4xELA&usqp=CAU',
        'https://static.seibertron.com/images/news/a613521a13848469ea0216e2dd15b8ad.jpg',
        'https://static.seibertron.com/images/news/8b7d648d1b0ff98e6d5a75574f3f25a3.jpg',
      ];
      useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center ">At a glance...</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="rounded overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <img src={image} alt={`Image ${index + 1}`} className="w-96 h-96" />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Gallery;