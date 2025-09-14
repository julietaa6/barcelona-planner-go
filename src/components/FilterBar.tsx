import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, MapPin, X } from "lucide-react";
import { useState } from "react";

const FilterBar = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [distance, setDistance] = useState([5]);
  
  const categories = [
    "All", "Culture", "Food & Drink", "Nature", "Architecture", "Art", "Museums", "Tours"
  ];
  
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const clearFilters = () => {
    setActiveFilters([]);
    setDistance([5]);
  };

  return (
    <div className="bg-white sticky top-0 z-40 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        {/* Main Filter Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters:</span>
          </div>
          
          {/* Category Filters */}
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilters.includes(category) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleFilter(category)}
              className={activeFilters.includes(category) 
                ? "bg-gradient-to-r from-primary to-secondary" 
                : ""
              }
            >
              {category}
            </Button>
          ))}
          
          {/* Distance Filter */}
          <div className="flex items-center gap-3 min-w-40">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <Slider
                value={distance}
                onValueChange={setDistance}
                max={20}
                min={1}
                step={1}
                className="w-full"
              />
            </div>
            <span className="text-sm text-muted-foreground min-w-fit">
              {distance[0]}km
            </span>
          </div>
          
          {/* Sort By */}
          <Select defaultValue="distance">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Distance</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="duration">Duration</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Clear Filters */}
          {activeFilters.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear all
            </Button>
          )}
        </div>
        
        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Badge 
                key={filter} 
                variant="secondary" 
                className="flex items-center gap-1"
              >
                {filter}
                <X 
                  className="h-3 w-3 cursor-pointer hover:text-destructive" 
                  onClick={() => toggleFilter(filter)}
                />
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;