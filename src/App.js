import React, { useState, useEffect } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    customers: 0,
    experience: 0,
    coffees: 0,
    awards: 0
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const targets = { customers: 500, experience: 8, coffees: 1200, awards: 15 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounters({
          customers: Math.floor(targets.customers * progress),
          experience: Math.floor(targets.experience * progress),
          coffees: Math.floor(targets.coffees * progress),
          awards: Math.floor(targets.awards * progress)
        });
        
        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);
    };
    
    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Testimonial carousel
  useEffect(() => {
    const testimonialCount = 3; // Fixed count to avoid dependency issues
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonialCount);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Newsletter kaydınız başarıyla tamamlandı! 🎉');
    setNewsletterEmail('');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Ayşe Demir",
      role: "İş İnsanı",
      comment: "CAFFE'de geçirdiğim her dakika mükemmel! Kahveleri gerçekten çok lezzetli ve atmosfer harika. Kesinlikle tavsiye ederim.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format"
    },
    {
      name: "Mehmet Can",
      role: "Yazılım Geliştirici",  
      comment: "Kod yazarken en sevdiğim yer burası. Hem kahveleri hem de ortamı çalışmak için mükemmel. WiFi hızı da çok iyi!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
    },
    {
      name: "Elif Yılmaz",
      role: "Öğretmen",
      comment: "Arkadaşlarımla sohbet etmek için en güzel mekan. Tatlıları da kahveleri kadar nefis. Personel çok ilgili ve güler yüzlü.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format"
    }
  ];

  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=400&fit=crop&auto=format",
      alt: "Barista Çalışması",
      category: "İşletme"
    },
    {
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=400&fit=crop&auto=format", 
      alt: "Kafe Atmosferi",
      category: "Atmosfer"
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop&auto=format",
      alt: "Latte Art",
      category: "Kahve"
    },
    {
      src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=400&fit=crop&auto=format",
      alt: "Taze Tatlılar",
      category: "Tatlı"
    },
    {
      src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=500&h=400&fit=crop&auto=format",
      alt: "Kahve Hazırlama",
      category: "İşletme"
    },
    {
      src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=400&fit=crop&auto=format",
      alt: "İç Mekan",
      category: "Atmosfer"
    }
  ];

  const specialOffers = [
    {
      title: "Sabah Kahvesi",
      description: "09:00-11:00 arası tüm kahvelerde %20 indirim",
      discount: "%20",
      time: "09:00 - 11:00",
      icon: "fa-sun"
    },
    {
      title: "İkili Menü",
      description: "Herhangi bir kahve + tatlı kombinasyonu",
      discount: "₺55",
      originalPrice: "₺70",
      icon: "fa-heart"
    },
    {
      title: "Cumartesi Özel",
      description: "Cumartesi günü 3 kahve al, 1 tanesini biz ödeyelim",
      discount: "3 Al 1 Öde",
      icon: "fa-gift"
    }
  ];

  const teamMembers = [
    {
      name: "Ali Barista",
      role: "Baş Barista",
      experience: "5 yıl deneyim",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format",
      specialty: "Latte Art Uzmanı"
    },
    {
      name: "Zeynep Chef",
      role: "Pastry Chef",
      experience: "7 yıl deneyim", 
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&auto=format",
      specialty: "Tatlı Ustası"
    },
    {
      name: "Can Manager",
      role: "İşletme Müdürü",
      experience: "10 yıl deneyim",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format",
      specialty: "Müşteri Deneyimi"
    }
  ];

  const coffeeMenu = [
    {
      name: "Espresso",
      description: "Klasik İtalyan espresso, yoğun ve aromatik",
      price: "₺25",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Americano",
      description: "Espresso ve sıcak su ile hazırlanan hafif kahve",
      price: "₺30",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Cappuccino",
      description: "Espresso, süt ve süt köpüğü ile hazırlanan klasik",
      price: "₺35",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Latte",
      description: "Espresso ve buharda pişirilmiş süt ile",
      price: "₺40",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Flat White",
      description: "Güçlü espresso ve kadifemsi süt köpüğü",
      price: "₺38",
      image: "https://images.unsplash.com/photo-1611854779393-1b2da9d5c0f1?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Mocha",
      description: "Espresso, çikolata ve süt ile hazırlanan tatlı kahve",
      price: "₺42",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format"
    }
  ];

  const dessertMenu = [
    {
      name: "Tiramisu",
      description: "Geleneksel İtalyan tatlısı, kahve aromalı",
      price: "₺45",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Cheesecake",
      description: "Kremalı peynir tatlısı, meyveli sos ile",
      price: "₺40",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Brownies",
      description: "Çikolatalı ve fındıklı ev yapımı brownie",
      price: "₺35",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Croissant",
      description: "Tereyağlı ve çıtır Fransız kroasan",
      price: "₺25",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Muffin",
      description: "Çeşitli aromalarda ev yapımı muffin",
      price: "₺30",
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Macarons",
      description: "Renkli ve lezzetli Fransız makaron çeşitleri",
      price: "₺50",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop&auto=format"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-coffee-brown text-white p-2 rounded-lg mr-3">
                <i className="fas fa-coffee text-xl"></i>
              </div>
              <h1 className="text-2xl font-bold text-coffee-dark">CAFFE</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">
                Ana Sayfa
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">
                Menü
              </button>
              <button onClick={() => scrollToSection('offers')} className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">
                Teklifler
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">
                Galeri
              </button>
              <button onClick={() => scrollToSection('team')} className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">
                Ekibimiz
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">
                Yorumlar
              </button>
              <button onClick={() => scrollToSection('about')} className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">
                Hakkımızda
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">
                İletişim
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-coffee-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 bg-white shadow-lg rounded-b-lg">
              <nav className="flex flex-col space-y-1">
                <button onClick={() => scrollToSection('home')} className="text-coffee-dark hover:text-coffee-brown hover:bg-cream transition-all py-3 px-4 text-left rounded-lg mx-2">
                  <i className="fas fa-home mr-2"></i>Ana Sayfa
                </button>
                <button onClick={() => scrollToSection('menu')} className="text-coffee-dark hover:text-coffee-brown hover:bg-cream transition-all py-3 px-4 text-left rounded-lg mx-2">
                  <i className="fas fa-coffee mr-2"></i>Menü
                </button>
                <button onClick={() => scrollToSection('offers')} className="text-coffee-dark hover:text-coffee-brown hover:bg-cream transition-all py-3 px-4 text-left rounded-lg mx-2">
                  <i className="fas fa-percent mr-2"></i>Teklifler
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-coffee-dark hover:text-coffee-brown hover:bg-cream transition-all py-3 px-4 text-left rounded-lg mx-2">
                  <i className="fas fa-images mr-2"></i>Galeri
                </button>
                <button onClick={() => scrollToSection('team')} className="text-coffee-dark hover:text-coffee-brown hover:bg-cream transition-all py-3 px-4 text-left rounded-lg mx-2">
                  <i className="fas fa-users mr-2"></i>Ekibimiz
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-coffee-dark hover:text-coffee-brown hover:bg-cream transition-all py-3 px-4 text-left rounded-lg mx-2">
                  <i className="fas fa-comments mr-2"></i>Yorumlar
                </button>
                <button onClick={() => scrollToSection('about')} className="text-coffee-dark hover:text-coffee-brown hover:bg-cream transition-all py-3 px-4 text-left rounded-lg mx-2">
                  <i className="fas fa-info-circle mr-2"></i>Hakkımızda
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-coffee-dark hover:text-coffee-brown hover:bg-cream transition-all py-3 px-4 text-left rounded-lg mx-2">
                  <i className="fas fa-envelope mr-2"></i>İletişim
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-20 min-h-screen flex items-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 245, 220, 0.9), rgba(210, 180, 140, 0.9)), url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-coffee-dark mb-6">
                Premium Kahve Deneyimi
              </h2>
              <p className="text-lg text-coffee-dark mb-8 leading-relaxed">
                Her yudum bir hikaye anlatan özel kahvelerimiz ve ev yapımı tatlılarımızla 
                sizi benzersiz bir lezzet yolculuğuna çıkarıyoruz. Modern atmosfer, 
                kaliteli hizmet ve unutulmaz tatlar için bizi ziyaret edin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('menu')} className="btn-primary">
                  <i className="fas fa-utensils mr-2"></i>
                  Menüyü İncele
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Rezervasyon Yap
                </button>
              </div>
              
              <div className="mt-8 flex items-center gap-8 text-coffee-dark">
                <div className="flex items-center gap-2">
                  <i className="fas fa-clock text-coffee-brown"></i>
                  <span className="text-sm">07:00 - 22:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-star text-coffee-brown"></i>
                  <span className="text-sm">4.9/5 Müşteri Puanı</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop" 
                    alt="Premium Kahve Deneyimi"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Floating Coffee Bean */}
              <div className="absolute -top-4 -right-4 bg-coffee-brown text-white p-3 rounded-full shadow-lg floating-animation">
                <i className="fas fa-coffee text-2xl pulse-animation"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coffee-dark mb-4">Menülerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Özenle seçilmiş kahve çekirdekleri ve ev yapımı tatlılarımızla sizlere en iyi lezzeti sunuyoruz.
            </p>
          </div>

          {/* Coffee Menu */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-coffee-dark mb-8 text-center">
              <i className="fas fa-coffee mr-3"></i>Kahveler
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffeeMenu.map((item, index) => (
                <div key={index} className="menu-card">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-coffee-dark">{item.name}</h4>
                      <span className="text-lg font-bold text-coffee-brown">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dessert Menu */}
          <div>
            <h3 className="text-3xl font-bold text-coffee-dark mb-8 text-center">
              <i className="fas fa-cookie-bite mr-3"></i>Tatlılar
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dessertMenu.map((item, index) => (
                <div key={index} className="menu-card">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-coffee-dark">{item.name}</h4>
                      <span className="text-lg font-bold text-coffee-brown">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="py-20 bg-gradient-to-br from-coffee-brown to-coffee-dark text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Özel Tekliflerimiz</h2>
            <p className="text-lg text-coffee-light max-w-2xl mx-auto">
              Size özel hazırladığımız kampanyalar ve indirimlerden faydalanın!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${offer.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
                <p className="text-coffee-light mb-4 text-sm">{offer.description}</p>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">{offer.discount}</div>
                  {offer.originalPrice && (
                    <div className="text-sm text-coffee-light">
                      <span className="line-through">{offer.originalPrice}</span>
                    </div>
                  )}
                  {offer.time && (
                    <div className="text-xs text-coffee-light bg-white/10 rounded-full px-3 py-1 inline-block">
                      {offer.time}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => scrollToSection('contact')} className="bg-white text-coffee-dark font-bold py-3 px-8 rounded-lg hover:bg-cream transition-colors duration-300">
              <i className="fas fa-phone mr-2"></i>
              Rezervasyon Yap
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coffee-dark mb-4">Galeri</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kafemizin atmosferini ve lezzetli ürünlerimizi keşfedin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{item.alt}</h3>
                    <p className="text-sm text-coffee-light">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coffee-dark mb-4">Ekibimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deneyimli ve tutkulu ekibimizle size en iyi hizmeti sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mx-auto mb-6 w-48 h-48 overflow-hidden rounded-full">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-coffee-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-coffee-dark mb-2">{member.name}</h3>
                <p className="text-coffee-brown font-medium mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
                <p className="text-coffee-dark text-sm bg-cream rounded-full px-4 py-1 inline-block">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-coffee-dark text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Müşteri Yorumları</h2>
            <p className="text-lg text-coffee-light max-w-2xl mx-auto">
              Değerli müşterilerimizin deneyimlerini keşfedin.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="mb-6">
                <i className="fas fa-quote-left text-4xl text-coffee-light mb-4"></i>
              </div>
              
              <div className="mb-6">
                <p className="text-lg leading-relaxed italic">
                  "{testimonials[currentTestimonial].comment}"
                </p>
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-xl mr-1"></i>
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="text-left">
                  <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-coffee-light">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-coffee-light">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <h2 className="text-3xl font-bold text-coffee-dark mb-4">
            <i className="fas fa-envelope mr-3"></i>
            Haberdar Ol!
          </h2>
          <p className="text-lg text-coffee-dark mb-8">
            Yeni ürünlerimiz, özel kampanyalarımız ve etkinliklerimizden haberdar olmak için bültene kaydol!
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="E-posta adresinizi girin"
                required
                className="flex-1 px-4 py-3 border border-coffee-brown rounded-lg focus:ring-2 focus:ring-coffee-brown focus:border-transparent"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Kaydol
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-coffee-dark mb-6">Bizim Hikayemiz</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                2015 yılında kurulan CAFFE, kahve tutkunları tarafından kahve severlere hizmet vermek 
                amacıyla kurulmuştur. Dünyanın en kaliteli kahve çekirdeklerini özenle seçiyor, 
                ustalarımızın ellerinde sanat eserine dönüştürüyoruz.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Modern ve samimi atmosferimizde, arkadaşlarınızla keyifli vakit geçirebilir, 
                iş toplantılarınızı yapabilir veya tek başınıza kitap okuyarak kahvenizin tadını çıkarabilirsiniz.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-coffee-brown mb-2">{counters.customers}+</div>
                  <div className="text-gray-600">Mutlu Müşteri</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coffee-brown mb-2">{counters.experience}</div>
                  <div className="text-gray-600">Yıllık Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coffee-brown mb-2">{counters.coffees}+</div>
                  <div className="text-gray-600">Servis Edlen Kahve</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coffee-brown mb-2">{counters.awards}</div>
                  <div className="text-gray-600">Ödül</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=300&fit=crop" 
                      alt="Kahve Yapım Süreci"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=300&fit=crop" 
                      alt="Kahve Çekirdekleri"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop" 
                      alt="Kahve Atmosferi"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=300&h=300&fit=crop" 
                      alt="Barista Çalışması"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coffee-dark mb-4">İletişim</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sorularınız, önerileriniz veya rezervasyon talepleriniz için bizimle iletişime geçin.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-2">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-brown focus:border-transparent"
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-2">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-brown focus:border-transparent"
                    placeholder="E-posta adresinizi girin"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-brown focus:border-transparent"
                    placeholder="Mesajınızı buraya yazın"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Mesaj Gönder
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-cream p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-coffee-dark mb-4">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-coffee-brown mr-3"></i>
                    <span className="text-gray-700">Bahçelievler Mah. Kahve Sokak No:15, İstanbul</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone text-coffee-brown mr-3"></i>
                    <span className="text-gray-700">+90 212 555 0123</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-coffee-brown mr-3"></i>
                    <span className="text-gray-700">info@caffe.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-cream p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-coffee-dark mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Pazartesi - Cuma</span>
                    <span className="text-coffee-dark font-medium">07:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cumartesi</span>
                    <span className="text-coffee-dark font-medium">08:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Pazar</span>
                    <span className="text-coffee-dark font-medium">09:00 - 21:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-dark text-white py-12">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-coffee-brown p-2 rounded-lg mr-3">
                  <i className="fas fa-coffee text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold">CAFFE</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Premium kahve deneyimi ve ev yapımı lezzetler ile sizleri ağırlıyoruz. 
                Kaliteli hizmet ve unutulmaz tatlar için bizi tercih edin.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">
                    Ana Sayfa
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('menu')} className="text-gray-300 hover:text-white transition-colors">
                    Menü
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('offers')} className="text-gray-300 hover:text-white transition-colors">
                    Teklifler
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-white transition-colors">
                    Galeri
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-white transition-colors">
                    Ekibimiz
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
                    Hakkımızda
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
                    İletişim
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com/caffe" target="_blank" rel="noopener noreferrer" className="bg-coffee-brown p-3 rounded-lg hover:bg-coffee-light transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/caffe" target="_blank" rel="noopener noreferrer" className="bg-coffee-brown p-3 rounded-lg hover:bg-coffee-light transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/caffe" target="_blank" rel="noopener noreferrer" className="bg-coffee-brown p-3 rounded-lg hover:bg-coffee-light transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://youtube.com/caffe" target="_blank" rel="noopener noreferrer" className="bg-coffee-brown p-3 rounded-lg hover:bg-coffee-light transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400">
                  © 2024 CAFFE. Tüm hakları saklıdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-coffee-brown text-white w-12 h-12 rounded-full shadow-lg hover:bg-coffee-dark transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Yukarı çık"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </div>
  );
}

export default App; 