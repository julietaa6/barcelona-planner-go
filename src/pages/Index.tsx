import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import ActivityCard from "@/components/ActivityCard";
import MapView from "@/components/MapView";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid, Map } from "lucide-react";
import { mockActivities } from "@/data/mockActivities";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Activities Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Today's <span className="text-primary">Activities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover handpicked experiences that showcase the best of Barcelona's culture, cuisine, and charm.
            </p>
          </div>
          
          {/* Filter Bar */}
          <FilterBar />
          
          {/* View Toggle */}
          <div className="mb-8">
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-muted-foreground">
                    Found <span className="font-semibold text-foreground">{mockActivities.length} activities</span> for today
                  </p>
                </div>
                <TabsList className="grid w-40 grid-cols-2">
                  <TabsTrigger value="grid" className="flex items-center gap-1">
                    <Grid className="h-4 w-4" />
                    Grid
                  </TabsTrigger>
                  <TabsTrigger value="map" className="flex items-center gap-1">
                    <Map className="h-4 w-4" />
                    Map
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockActivities.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="map">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {mockActivities.slice(0, 3).map((activity) => (
                      <ActivityCard key={activity.id} activity={activity} />
                    ))}
                    <div className="text-center">
                      <Button variant="outline" className="w-full">
                        Load More Activities
                      </Button>
                    </div>
                  </div>
                  <div className="lg:sticky lg:top-24">
                    <MapView />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-muted/50 py-12 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Discover Barcelona</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Your gateway to authentic experiences in one of Europe's most vibrant cities.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline">About Us</Button>
            <Button variant="outline">Contact</Button>
            <Button variant="outline">Support</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;