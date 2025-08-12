import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://cdn.poehali.dev/files/762a4e1c-2e23-4b36-bf30-f91252215c46.png" 
                alt="80 лет межотраслевой техникум" 
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors font-medium">Главная</a>
              <a href="#events" className="text-muted-foreground hover:text-primary transition-colors font-medium">Мероприятия</a>
              <a href="#history" className="text-muted-foreground hover:text-primary transition-colors font-medium">История</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 animate-fade-in">
            <Icon name="Star" className="w-4 h-4 mr-2" />
            80 лет образовательного наследия
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 animate-fade-in">
            Республиканский<br />
            <span className="text-primary">межотраслевой техникум</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body animate-fade-in">
            Восемь десятилетий качественного профессионального образования в сердце Бурятии. 
            Готовим специалистов будущего с 1944 года.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="font-medium">
              <Icon name="Calendar" className="w-4 h-4 mr-2" />
              Юбилейные мероприятия
            </Button>
            <Button variant="outline" size="lg" className="font-medium">
              <Icon name="BookOpen" className="w-4 h-4 mr-2" />
              История техникума
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-display font-bold text-primary mb-2">80</div>
              <div className="text-sm text-muted-foreground font-body">Лет образования</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-display font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground font-body">Специальностей</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-display font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground font-body">Выпускников ежегодно</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-display font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground font-body">Трудоустройство</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Юбилейные мероприятия
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Торжественные события в честь 80-летия техникума
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Calendar" className="w-8 h-8 text-primary" />
                  <Badge>15 октября</Badge>
                </div>
                <CardTitle className="font-display">Торжественное собрание</CardTitle>
                <CardDescription className="font-body">
                  Официальная церемония открытия юбилейного года
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground font-body">
                  <Icon name="MapPin" className="w-4 h-4 mr-2" />
                  Актовый зал техникума
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Users" className="w-8 h-8 text-secondary" />
                  <Badge variant="secondary">20 октября</Badge>
                </div>
                <CardTitle className="font-display">Встреча выпускников</CardTitle>
                <CardDescription className="font-body">
                  Воссоединение поколений учащихся техникума
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground font-body">
                  <Icon name="Clock" className="w-4 h-4 mr-2" />
                  14:00 - 18:00
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Award" className="w-8 h-8 text-accent" />
                  <Badge variant="outline">25 октября</Badge>
                </div>
                <CardTitle className="font-display">Выставка достижений</CardTitle>
                <CardDescription className="font-body">
                  Презентация лучших проектов студентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground font-body">
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
              <div className="flex flex-col md:flex-row items-start gap-6 animate-fade-in">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                    1944
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Основание техникума</h3>
                  <p className="text-muted-foreground font-body">
                    В послевоенный период открылось учебное заведение для подготовки 
                    квалифицированных специалистов в селе Новоильинск Заиграевского района.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col md:flex-row items-start gap-6 animate-fade-in">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                    1970
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Расширение специальностей</h3>
                  <p className="text-muted-foreground font-body">
                    Открыты новые отделения: сельскохозяйственное, техническое и экономическое, 
                    что позволило готовить специалистов широкого профиля.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col md:flex-row items-start gap-6 animate-fade-in">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                    2000
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Модернизация образования</h3>
                  <p className="text-muted-foreground font-body">
                    Внедрение современных образовательных технологий, компьютеризация 
                    учебного процесса и создание современной материально-технической базы.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col md:flex-row items-start gap-6 animate-fade-in">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                    2024
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Юбилейный год</h3>
                  <p className="text-muted-foreground font-body">
                    80 лет служения образованию! Техникум является ведущим учебным заведением 
                    региона, выпустившим десятки тысяч квалифицированных специалистов.
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