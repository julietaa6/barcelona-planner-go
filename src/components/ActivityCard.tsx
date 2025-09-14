import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Star, Users } from "lucide-react";

interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  price: string;
  rating: number;
  location: string;
  distance: string;
  groupSize: string;
}

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {activity.category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-white/90 text-foreground border-white/50">
            {activity.price}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {activity.title}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium">{activity.rating}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {activity.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{activity.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{activity.location} • {activity.distance}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{activity.groupSize}</span>
          </div>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-warm transition-all duration-300">
          Book Experience
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;