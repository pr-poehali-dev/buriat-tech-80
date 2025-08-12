import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background tech-pattern">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-10 w-4 h-4 bg-primary rounded-full animate-float opacity-30" style={{animationDelay: '3s'}}></div>
      </div>
      {/* Header */}
      <header className="glass-effect border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/762a4e1c-2e23-4b36-bf30-f91252215c46.png" 
                  alt="80 лет межотраслевой техникум" 
                  className="h-16 w-auto animate-glow-pulse"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative group">
                Главная
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#events" className="text-foreground/80 hover:text-secondary transition-all duration-300 font-medium relative group">
                Мероприятия
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#history" className="text-foreground/80 hover:text-accent transition-all duration-300 font-medium relative group">
                История
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#contacts" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative group">
                Контакты
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <Badge variant="secondary" className="mb-8 animate-fade-in glass-effect border-primary/30 hover:neon-glow transition-all duration-500">
            <Icon name="Sparkles" className="w-4 h-4 mr-2 animate-rotate-slow" />
            80 лет инновационного образования
          </Badge>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 animate-slide-up">
            Республиканский<br />
            <span className="gradient-text">межотраслевой техникум</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 font-body animate-fade-in leading-relaxed">
            Восемь десятилетий качественного профессионального образования в сердце Бурятии. 
            Готовим специалистов будущего с передовыми технологиями.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button size="lg" className="relative overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 text-lg px-8 py-4 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Юбилейные мероприятия
            </Button>
            <Button variant="outline" size="lg" className="glass-effect border-primary/30 hover:border-primary hover:neon-glow transition-all duration-500 text-lg px-8 py-4 rounded-2xl group">
              <Icon name="BookOpen" className="w-5 h-5 mr-2 group-hover:animate-float" />
              История техникума
            </Button>
          </div>
          
          {/* Tech Decorations */}
          <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full animate-rotate-slow"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-secondary/20 rounded-lg animate-float"></div>
          <div className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-sm animate-glow-pulse"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="glass-effect p-8 rounded-3xl hover:neon-glow transition-all duration-500 group animate-fade-in">
              <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4 group-hover:animate-float">80</div>
              <div className="text-sm text-foreground/60 font-body uppercase tracking-wider">Лет образования</div>
            </div>
            <div className="glass-effect p-8 rounded-3xl hover:neon-glow transition-all duration-500 group animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4 group-hover:animate-float">15+</div>
              <div className="text-sm text-foreground/60 font-body uppercase tracking-wider">Специальностей</div>
            </div>
            <div className="glass-effect p-8 rounded-3xl hover:neon-glow transition-all duration-500 group animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4 group-hover:animate-float">1000+</div>
              <div className="text-sm text-foreground/60 font-body uppercase tracking-wider">Выпускников ежегодно</div>
            </div>
            <div className="glass-effect p-8 rounded-3xl hover:neon-glow transition-all duration-500 group animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4 group-hover:animate-float">95%</div>
              <div className="text-sm text-foreground/60 font-body uppercase tracking-wider">Трудоустройство</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
              Юбилейные <span className="gradient-text">мероприятия</span>
            </h2>
            <p className="text-xl text-foreground/70 font-body animate-fade-in">
              Торжественные события в честь 80-летия техникума
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-500 group hover:scale-105 animate-fade-in rounded-3xl overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-2xl">
                    <Icon name="Calendar" className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30">15 октября</Badge>
                </div>
                <CardTitle className="font-display text-2xl mt-4 group-hover:text-primary transition-colors">Торжественное собрание</CardTitle>
                <CardDescription className="font-body text-lg text-foreground/70">
                  Официальная церемония открытия юбилейного года
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-foreground/60 font-body">
                  <Icon name="MapPin" className="w-4 h-4 mr-2" />
                  Актовый зал техникума
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-secondary/20 hover:border-secondary/50 transition-all duration-500 group hover:scale-105 animate-fade-in rounded-3xl overflow-hidden" style={{animationDelay: '0.1s'}}>
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-2xl">
                    <Icon name="Users" className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="bg-gradient-to-r from-secondary/20 to-accent/20 border-secondary/30">20 октября</Badge>
                </div>
                <CardTitle className="font-display text-2xl mt-4 group-hover:text-secondary transition-colors">Встреча выпускников</CardTitle>
                <CardDescription className="font-body text-lg text-foreground/70">
                  Воссоединение поколений учащихся техникума
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-foreground/60 font-body">
                  <Icon name="Clock" className="w-4 h-4 mr-2" />
                  14:00 - 18:00
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-accent/20 hover:border-accent/50 transition-all duration-500 group hover:scale-105 animate-fade-in rounded-3xl overflow-hidden" style={{animationDelay: '0.2s'}}>
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-2xl">
                    <Icon name="Award" className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="bg-gradient-to-r from-accent/20 to-primary/20 border-accent/30">25 октября</Badge>
                </div>
                <CardTitle className="font-display text-2xl mt-4 group-hover:text-accent transition-colors">Выставка достижений</CardTitle>
                <CardDescription className="font-body text-lg text-foreground/70">
                  Презентация лучших проектов студентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-foreground/60 font-body">
                  <Icon name="Building" className="w-4 h-4 mr-2" />
                  Выставочный зал
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              История техникума
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Восемь десятилетий развития и достижений
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in group">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center text-white font-display font-bold text-2xl group-hover:animate-glow-pulse transition-all duration-500 relative">
                    1944
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="glass-effect p-8 rounded-3xl flex-1 hover:neon-glow transition-all duration-500">
                  <h3 className="text-2xl font-display font-semibold mb-4 gradient-text">Основание техникума</h3>
                  <p className="text-foreground/80 font-body text-lg leading-relaxed">
                    В трудные послевоенные годы в селе Новоильинск Заиграевского района был основан
                    техникум для подготовки квалифицированных кадров для восстановления народного хозяйства.
                    Учебное заведение создано как межотраслевой техникум республиканского значения.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col md:flex-row-reverse items-center gap-8 animate-fade-in group">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-3xl flex items-center justify-center text-white font-display font-bold text-xl group-hover:animate-glow-pulse transition-all duration-500 relative">
                    1970-80
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-accent/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="glass-effect p-8 rounded-3xl flex-1 hover:neon-glow transition-all duration-500">
                  <h3 className="text-2xl font-display font-semibold mb-4 gradient-text">Развитие межотраслевого профиля</h3>
                  <p className="text-foreground/80 font-body text-lg leading-relaxed">
                    Техникум становится ведущим межотраслевым образовательным учреждением.
                    Открываются новые специальности: автомеханик, строительные специальности,
                    сельскохозяйственный и технический профили подготовки.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in group">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center text-white font-display font-bold text-xl group-hover:animate-glow-pulse transition-all duration-500 relative">
                    2002
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-primary/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="glass-effect p-8 rounded-3xl flex-1 hover:neon-glow transition-all duration-500">
                  <h3 className="text-2xl font-display font-semibold mb-4 gradient-text">Государственная аккредитация</h3>
                  <p className="text-foreground/80 font-body text-lg leading-relaxed">
                    В октябре 2002 года техникум прошел государственную регистрацию как
                    Государственное автономное профессиональное образовательное учреждение.
                    Создание филиалов в Бичурском и других районах Республики Бурятия.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col md:flex-row-reverse items-center gap-8 animate-fade-in group">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center text-white font-display font-bold text-2xl group-hover:animate-glow-pulse transition-all duration-500 relative animate-float">
                    2024
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-secondary/50 to-accent/50 rounded-3xl blur-xl opacity-100 animate-glow-pulse"></div>
                  </div>
                </div>
                <div className="glass-effect p-8 rounded-3xl flex-1 neon-glow">
                  <h3 className="text-2xl font-display font-semibold mb-4 gradient-text">80 лет образовательного наследия!</h3>
                  <p className="text-foreground/80 font-body text-lg leading-relaxed">
                    Сегодня ГАПОУ РБ «РМТ» — это современное многопрофильное учебное заведение
                    с филиалами по всей республике. Техникум подготовил десятки тысяч специалистов
                    для различных отраслей экономики Бурятии и всей России.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Контакты
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Свяжитесь с нами для получения информации
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="font-display flex items-center">
                  <Icon name="MapPin" className="w-5 h-5 mr-2 text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  Республика Бурятия,<br />
                  Заиграевский район,<br />
                  с. Новоильинск
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="font-display flex items-center">
                  <Icon name="Phone" className="w-5 h-5 mr-2 text-primary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  Приёмная: +7 (XXX) XXX-XX-XX<br />
                  Приёмная комиссия: +7 (XXX) XXX-XX-XX
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="font-display flex items-center">
                  <Icon name="Mail" className="w-5 h-5 mr-2 text-primary" />
                  Электронная почта
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  info@rmt-novoi.edu.ru<br />
                  reception@rmt-novoi.edu.ru
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="font-display flex items-center">
                  <Icon name="Clock" className="w-5 h-5 mr-2 text-primary" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  Пн - Пт: 8:00 - 17:00<br />
                  Суббота: 8:00 - 13:00<br />
                  Воскресенье: выходной
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-4">
              <img 
                src="https://cdn.poehali.dev/files/762a4e1c-2e23-4b36-bf30-f91252215c46.png" 
                alt="80 лет межотраслевой техникум" 
                className="h-12 w-auto mx-auto opacity-90"
              />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">
              Республиканский межотраслевой техникум
            </h3>
            <p className="text-primary-foreground/80 font-body mb-4">
              80 лет качественного профессионального образования
            </p>
            <div className="text-sm text-primary-foreground/60 font-body">
              © 2024 РМТ. 1944-2024. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;