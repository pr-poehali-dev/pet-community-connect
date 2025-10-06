import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [selectedPet, setSelectedPet] = useState<number | null>(null);
  const [showNewPost, setShowNewPost] = useState(false);
  const [showNewShort, setShowNewShort] = useState(false);
  const [newPostCaption, setNewPostCaption] = useState('');
  const [newShortCaption, setNewShortCaption] = useState('');
  const [posts, setPosts] = useState<any[]>([]);
  const [shorts, setShorts] = useState<any[]>([]);

  const petPosts = [
    {
      id: 1,
      petName: 'Бублик',
      ownerName: 'Мария',
      avatar: '🐕',
      species: 'Собака',
      breed: 'Корги',
      age: '2 года',
      weight: '12 кг',
      bio: 'Весёлый корги, который обожает прогулки и вкусняшки! Люблю плавать и играть с мячиком.',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800',
      coverImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200',
      followers: 3542,
      following: 289,
      posts: 127,
      likes: 1247,
      comments: 83,
      caption: 'Первая прогулка после дождя! 🌧️ Бублик обожает прыгать по лужам',
      time: '2 часа назад',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400', title: 'Прогулка утром' },
        { id: 2, image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400', title: 'Игры на пляже' },
        { id: 3, image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400', title: 'Новая игрушка' }
      ],
      albums: [
        {
          id: 1,
          name: 'Летние приключения',
          photos: [
            'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
            'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400',
            'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400',
            'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400'
          ]
        },
        {
          id: 2,
          name: 'Зимние забавы',
          photos: [
            'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400',
            'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400'
          ]
        }
      ]
    },
    {
      id: 2,
      petName: 'Мурзик',
      ownerName: 'Алексей',
      avatar: '🐱',
      species: 'Кот',
      breed: 'Британец',
      age: '3 года',
      weight: '5 кг',
      bio: 'Аристократичный британец с золотым характером. Предпочитаю долгий сон и солнечные ванны.',
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800',
      coverImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200',
      followers: 2834,
      following: 156,
      posts: 89,
      likes: 892,
      comments: 45,
      caption: 'Когда солнечный зайчик – твой лучший друг ☀️',
      time: '5 часов назад',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400', title: 'Утренняя зарядка' }
      ],
      albums: [
        {
          id: 1,
          name: 'Домашний уют',
          photos: [
            'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400',
            'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400'
          ]
        }
      ]
    },
    {
      id: 3,
      petName: 'Рекс',
      ownerName: 'Дмитрий',
      avatar: '🐕',
      species: 'Собака',
      breed: 'Хаски',
      age: '4 года',
      weight: '25 кг',
      bio: 'Энергичный хаски с голубыми глазами. Обожаю снег, бег и приключения! 🏔️',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800',
      coverImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200',
      followers: 5621,
      following: 412,
      posts: 234,
      likes: 2134,
      comments: 156,
      caption: 'Снежный день – лучший день! ❄️🐾',
      time: '1 день назад',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400', title: 'Снежные игры' },
        { id: 2, image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400', title: 'Бег по лесу' }
      ],
      albums: [
        {
          id: 1,
          name: 'Зимние путешествия',
          photos: [
            'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400',
            'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400'
          ]
        }
      ]
    }
  ];

  const communities = [
    { name: 'Собачники', icon: '🐕', members: '45.2К', color: 'bg-primary' },
    { name: 'Котики', icon: '🐱', members: '38.7К', color: 'bg-secondary' },
    { name: 'Птички', icon: '🦜', members: '12.4К', color: 'bg-accent' },
    { name: 'Грызуны', icon: '🐹', members: '8.9К', color: 'bg-muted' }
  ];

  const shopItems = [
    {
      id: 1,
      name: 'Игрушка-косточка',
      price: 450,
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400',
      category: 'Игрушки'
    },
    {
      id: 2,
      name: 'Когтеточка премиум',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400',
      category: 'Мебель'
    },
    {
      id: 3,
      name: 'Миска керамическая',
      price: 650,
      image: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=400',
      category: 'Посуда'
    },
    {
      id: 4,
      name: 'Поводок светоотражающий',
      price: 890,
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400',
      category: 'Аксессуары'
    }
  ];

  if (selectedPet !== null) {
    const pet = petPosts.find(p => p.id === selectedPet);
    if (!pet) return null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setSelectedPet(null)} className="gap-2">
                <Icon name="ArrowLeft" size={20} />
                Назад
              </Button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {pet.petName}
              </h1>
              <Button variant="outline" className="gap-2">
                <Icon name="Share2" size={20} />
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 pb-8">
          <div className="relative">
            <div className="h-64 overflow-hidden rounded-b-3xl">
              <img
                src={pet.coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-white text-8xl flex items-center justify-center shadow-xl">
                {pet.avatar}
              </div>
            </div>
          </div>

          <div className="mt-20 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold">{pet.petName}</h2>
              <p className="text-muted-foreground text-lg">{pet.breed} · {pet.age}</p>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{pet.posts}</p>
                  <p className="text-sm text-muted-foreground">Постов</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{pet.followers}</p>
                  <p className="text-sm text-muted-foreground">Подписчиков</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{pet.following}</p>
                  <p className="text-sm text-muted-foreground">Подписок</p>
                </div>
              </div>
              <div className="flex gap-3 justify-center mt-6">
                <Button className="gap-2">
                  <Icon name="UserPlus" size={18} />
                  Подписаться
                </Button>
                <Button variant="outline" className="gap-2">
                  <Icon name="MessageCircle" size={18} />
                  Написать
                </Button>
              </div>
            </div>

            <Card className="p-6">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <Icon name="Info" size={20} className="text-primary" />
                О питомце
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">{pet.bio}</p>
                <div className="flex gap-4 mt-4">
                  <Badge variant="secondary" className="gap-2">
                    <Icon name="Calendar" size={14} />
                    {pet.age}
                  </Badge>
                  <Badge variant="secondary" className="gap-2">
                    <Icon name="Weight" size={14} />
                    {pet.weight}
                  </Badge>
                  <Badge variant="secondary" className="gap-2">
                    <Icon name="User" size={14} />
                    {pet.ownerName}
                  </Badge>
                </div>
              </div>
            </Card>

            <div>
              <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                <Icon name="Sparkles" size={24} className="text-primary" />
                Истории
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {pet.stories.map((story) => (
                  <div key={story.id} className="flex-shrink-0 cursor-pointer group">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-primary group-hover:scale-105 transition-transform">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-center mt-2 font-medium">{story.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                <Icon name="Image" size={24} className="text-primary" />
                Фотоальбомы
              </h3>
              <div className="space-y-6">
                {pet.albums.map((album) => (
                  <Card key={album.id} className="p-6">
                    <h4 className="font-bold text-lg mb-4">{album.name}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {album.photos.map((photo, idx) => (
                        <div key={idx} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
                          <img
                            src={photo}
                            alt={`Photo ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🐾</div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                PetStories
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="gap-2">
                <Icon name="Home" size={20} />
                Главная
              </Button>
              <Button variant="ghost" className="gap-2">
                <Icon name="Users" size={20} />
                Сообщества
              </Button>
              <Button variant="ghost" className="gap-2">
                <Icon name="ShoppingBag" size={20} />
                Магазин
              </Button>
              <Dialog open={showNewPost} onOpenChange={setShowNewPost}>
                <DialogTrigger asChild>
                  <Button className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Plus" size={20} />
                    Добавить пост
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Новый пост</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="petSelect">Выберите питомца</Label>
                      <select
                        id="petSelect"
                        className="w-full p-2 border border-input rounded-lg bg-background"
                      >
                        {petPosts.map((pet) => (
                          <option key={pet.id} value={pet.id}>
                            {pet.avatar} {pet.petName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postImage">Фото</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                        <Icon name="Upload" size={40} className="mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Нажмите чтобы загрузить фото</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="caption">Описание</Label>
                      <Textarea
                        id="caption"
                        placeholder="Расскажите историю..."
                        value={newPostCaption}
                        onChange={(e) => setNewPostCaption(e.target.value)}
                        rows={4}
                      />
                    </div>
                    <Button 
                      className="w-full gap-2" 
                      onClick={() => {
                        if (newPostCaption) {
                          setPosts([...posts, {
                            id: Date.now(),
                            petName: petPosts[0].petName,
                            ownerName: 'Вы',
                            avatar: petPosts[0].avatar,
                            species: petPosts[0].species,
                            image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
                            likes: 0,
                            comments: 0,
                            caption: newPostCaption,
                            time: 'только что'
                          }]);
                          setNewPostCaption('');
                          setShowNewPost(false);
                        }
                      }}
                    >
                      <Icon name="Send" size={18} />
                      Опубликовать
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog open={showNewShort} onOpenChange={setShowNewShort}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Icon name="Video" size={20} />
                    Shorts
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Новый Short</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="petSelectShort">Выберите питомца</Label>
                      <select
                        id="petSelectShort"
                        className="w-full p-2 border border-input rounded-lg bg-background"
                      >
                        {petPosts.map((pet) => (
                          <option key={pet.id} value={pet.id}>
                            {pet.avatar} {pet.petName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shortVideo">Видео (вертикальное)</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                        <Icon name="Film" size={40} className="mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Нажмите чтобы загрузить видео</p>
                        <p className="text-xs text-muted-foreground mt-1">Формат 9:16 (вертикальное)</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shortCaption">Описание</Label>
                      <Textarea
                        id="shortCaption"
                        placeholder="О чем ваш Short?..."
                        value={newShortCaption}
                        onChange={(e) => setNewShortCaption(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <Button 
                      className="w-full gap-2"
                      onClick={() => {
                        if (newShortCaption) {
                          setShorts([...shorts, {
                            id: Date.now(),
                            petName: petPosts[0].petName,
                            username: '@' + petPosts[0].petName.toLowerCase(),
                            avatar: petPosts[0].avatar,
                            image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
                            caption: newShortCaption
                          }]);
                          setNewShortCaption('');
                          setShowNewShort(false);
                        }
                      }}
                    >
                      <Icon name="Send" size={18} />
                      Опубликовать
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </nav>
            <Avatar className="w-10 h-10 border-2 border-primary">
              <AvatarFallback>👤</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 h-12">
            <TabsTrigger value="feed" className="gap-2">
              <Icon name="Newspaper" size={18} />
              Лента
            </TabsTrigger>
            <TabsTrigger value="rating" className="gap-2">
              <Icon name="Trophy" size={18} />
              Рейтинг
            </TabsTrigger>
            <TabsTrigger value="communities" className="gap-2">
              <Icon name="Users" size={18} />
              Группы
            </TabsTrigger>
            <TabsTrigger value="shorts" className="gap-2">
              <Icon name="Film" size={18} />
              Shorts
            </TabsTrigger>
            <TabsTrigger value="shop" className="gap-2">
              <Icon name="ShoppingCart" size={18} />
              Магазин
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6 animate-fade-in">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {posts.map((post, index) => (
                  <Card 
                    key={post.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 bg-green-50"
                  >
                    <CardContent className="p-0">
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-4xl">{post.avatar}</div>
                          <div>
                            <h3 className="font-bold text-lg">{post.petName}</h3>
                            <p className="text-sm text-muted-foreground">
                              {post.ownerName} · {post.time}
                            </p>
                          </div>
                        </div>
                        <Badge className="gap-1 bg-accent">
                          Новое!
                        </Badge>
                      </div>
                      <div className="relative overflow-hidden group">
                        <img
                          src={post.image}
                          alt={post.petName}
                          className="w-full aspect-square object-cover"
                        />
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="gap-2 hover:text-primary">
                            <Icon name="Heart" size={20} />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2 hover:text-accent">
                            <Icon name="MessageCircle" size={20} />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2 hover:text-secondary">
                            <Icon name="Share2" size={20} />
                          </Button>
                        </div>
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold">{post.petName}</span> {post.caption}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {petPosts.map((post, index) => (
                  <Card 
                    key={post.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up border-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="p-4 flex items-center justify-between">
                        <div 
                          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => setSelectedPet(post.id)}
                        >
                          <div className="text-4xl">{post.avatar}</div>
                          <div>
                            <h3 className="font-bold text-lg">{post.petName}</h3>
                            <p className="text-sm text-muted-foreground">
                              {post.ownerName} · {post.time}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="gap-1">
                          {post.species}
                        </Badge>
                      </div>

                      <div className="relative overflow-hidden group">
                        <img
                          src={post.image}
                          alt={post.petName}
                          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-4 space-y-3">
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="gap-2 hover:text-primary">
                            <Icon name="Heart" size={20} />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2 hover:text-accent">
                            <Icon name="MessageCircle" size={20} />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2 hover:text-secondary">
                            <Icon name="Share2" size={20} />
                          </Button>
                        </div>
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold">{post.petName}</span> {post.caption}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-2 sticky top-24">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                    Популярные сообщества
                  </h3>
                  <div className="space-y-3">
                    {communities.map((community, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${community.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                            {community.icon}
                          </div>
                          <div>
                            <p className="font-semibold">{community.name}</p>
                            <p className="text-xs text-muted-foreground">{community.members} участников</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Войти
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rating" className="animate-fade-in">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-2 flex items-center justify-center gap-3">
                  <Icon name="Trophy" size={40} className="text-yellow-500" />
                  Топ питомцев
                </h2>
                <p className="text-muted-foreground">Самые популярные странички по лайкам и подписчикам</p>
              </div>

              <div className="grid gap-4">
                {petPosts
                  .sort((a, b) => (b.likes + b.followers) - (a.likes + a.followers))
                  .map((pet, index) => {
                    const totalScore = pet.likes + pet.followers;
                    const medalColors = ['text-yellow-500', 'text-gray-400', 'text-orange-600'];
                    const bgColors = ['bg-yellow-50 border-yellow-300', 'bg-gray-50 border-gray-300', 'bg-orange-50 border-orange-300'];
                    
                    return (
                      <Card 
                        key={pet.id} 
                        className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${index < 3 ? bgColors[index] : ''}`}
                        onClick={() => setSelectedPet(pet.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-6">
                            <div className="relative">
                              <div className={`text-6xl font-bold ${index < 3 ? medalColors[index] : 'text-muted-foreground'} w-16 text-center`}>
                                {index < 3 ? (
                                  <Icon name="Medal" size={60} className={medalColors[index]} />
                                ) : (
                                  `#${index + 1}`
                                )}
                              </div>
                            </div>
                            
                            <div className="flex-1 flex items-center gap-6">
                              <div className="relative group">
                                <img
                                  src={pet.image}
                                  alt={pet.petName}
                                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform"
                                />
                                <div className="absolute -top-2 -right-2 text-4xl">{pet.avatar}</div>
                              </div>
                              
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-1">{pet.petName}</h3>
                                <p className="text-muted-foreground mb-3">
                                  {pet.breed} · {pet.ownerName}
                                </p>
                                <div className="flex items-center gap-6 text-sm">
                                  <div className="flex items-center gap-2">
                                    <Icon name="Heart" size={18} className="text-red-500" />
                                    <span className="font-semibold">{pet.likes.toLocaleString()}</span>
                                    <span className="text-muted-foreground">лайков</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Icon name="Users" size={18} className="text-blue-500" />
                                    <span className="font-semibold">{pet.followers.toLocaleString()}</span>
                                    <span className="text-muted-foreground">подписчиков</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Icon name="FileText" size={18} className="text-green-500" />
                                    <span className="font-semibold">{pet.posts}</span>
                                    <span className="text-muted-foreground">постов</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="text-right">
                                <div className="text-3xl font-bold text-primary mb-1">
                                  {totalScore.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  очков рейтинга
                                </div>
                                <Badge className="mt-2" variant={index === 0 ? "default" : "secondary"}>
                                  {index === 0 ? "🏆 Лидер" : index === 1 ? "🥈 2 место" : index === 2 ? "🥉 3 место" : "Участник"}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>

              <Card className="p-6 border-2 border-dashed">
                <div className="text-center">
                  <Icon name="TrendingUp" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-bold text-xl mb-2">Как попасть в топ?</h3>
                  <p className="text-muted-foreground mb-4">
                    Публикуй интересный контент, собирай лайки и подписчиков!
                  </p>
                  <div className="flex justify-center gap-3">
                    <Button onClick={() => setShowNewPost(true)}>
                      <Icon name="Plus" size={18} />
                      Добавить пост
                    </Button>
                    <Button variant="outline" onClick={() => setShowNewShort(true)}>
                      <Icon name="Video" size={18} />
                      Shorts
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="communities" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communities.map((community, idx) => (
                <Card 
                  key={idx} 
                  className="p-6 text-center hover:shadow-xl transition-all cursor-pointer group border-2 hover:border-primary"
                >
                  <div className={`w-24 h-24 ${community.color} rounded-full flex items-center justify-center text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {community.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{community.name}</h3>
                  <p className="text-muted-foreground mb-4">{community.members} участников</p>
                  <Button className="w-full gap-2">
                    <Icon name="UserPlus" size={18} />
                    Присоединиться
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shorts" className="animate-fade-in">
            <div className="max-w-md mx-auto space-y-6">
              {shorts.map((short) => (
                <Card key={short.id} className="overflow-hidden border-2 bg-green-50">
                  <CardContent className="p-0">
                    <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 relative">
                      <img
                        src={short.image}
                        alt="Short video"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent">Новое!</Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-3xl">{short.avatar}</div>
                          <div>
                            <h4 className="font-bold">{short.petName}</h4>
                            <p className="text-sm opacity-90">{short.username}</p>
                          </div>
                        </div>
                        <p className="text-sm mb-4">{short.caption}</p>
                      </div>
                      <div className="absolute right-4 bottom-24 space-y-4">
                        <Button size="icon" variant="ghost" className="w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full">
                          <Icon name="Heart" size={24} />
                        </Button>
                        <Button size="icon" variant="ghost" className="w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full">
                          <Icon name="MessageCircle" size={24} />
                        </Button>
                        <Button size="icon" variant="ghost" className="w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full">
                          <Icon name="Share2" size={24} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="overflow-hidden border-2">
                <CardContent className="p-0">
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 relative">
                    <img
                      src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600"
                      alt="Short video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-3xl">🐕</div>
                        <div>
                          <h4 className="font-bold">Трюки Рекса</h4>
                          <p className="text-sm opacity-90">@rex_tricks</p>
                        </div>
                      </div>
                      <p className="text-sm mb-4">Учим новый трюк: прыжок через обруч! 🎪</p>
                    </div>
                    <div className="absolute right-4 bottom-24 space-y-4">
                      <Button size="icon" variant="ghost" className="w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full">
                        <Icon name="Heart" size={24} />
                      </Button>
                      <Button size="icon" variant="ghost" className="w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full">
                        <Icon name="MessageCircle" size={24} />
                      </Button>
                      <Button size="icon" variant="ghost" className="w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full">
                        <Icon name="Share2" size={24} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="shop" className="animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Магазин товаров</h2>
                <Button variant="outline" className="gap-2">
                  <Icon name="Filter" size={18} />
                  Фильтры
                </Button>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {shopItems.map((item, idx) => (
                  <Card 
                    key={item.id} 
                    className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group border-2"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <Badge className="absolute top-3 right-3 bg-white/90 text-foreground">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="p-4 space-y-3">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold text-primary">{item.price} ₽</p>
                          <Button size="sm" className="gap-2">
                            <Icon name="ShoppingCart" size={16} />
                            Купить
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="mt-16 bg-white border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🐾</div>
              <p className="text-muted-foreground">© 2024 PetStories. Социальная сеть для питомцев</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">О нас</Button>
              <Button variant="ghost" size="sm">Правила</Button>
              <Button variant="ghost" size="sm">Поддержка</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;