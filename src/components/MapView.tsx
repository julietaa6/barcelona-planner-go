import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

// Note: For Mapbox integration, you'll need to add your API key
// This is a placeholder component that simulates the map functionality

const MapView = () => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const mapContainer = useRef<HTMLDivElement>(null);

  const initializeMap = () => {
    if (!mapboxToken.trim()) {
      alert('Please enter your Mapbox public token');
      return;
    }
    
    // Here you would initialize the actual Mapbox map
    // For now, we'll hide the token input to show the map placeholder
    setShowTokenInput(false);
  };

  if (showTokenInput) {
    return (
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
        <p className="text-muted-foreground mb-4">
          To display the interactive map with activity locations, please enter your Mapbox public token.
        </p>
        <div className="max-w-md mx-auto space-y-3">
          <Input
            placeholder="Enter Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <Button onClick={initializeMap} className="w-full">
            Load Map
          </Button>
          <p className="text-xs text-muted-foreground">
            Get your token at{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
      {/* Map Placeholder */}
      <div 
        ref={mapContainer} 
        className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center"
      >
        <div className="text-center">
          <Navigation className="h-8 w-8 mx-auto mb-2 text-primary" />
          <p className="text-sm text-muted-foreground">Interactive Map Loading...</p>
        </div>
      </div>
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 space-y-2">
        <Button size="sm" variant="secondary">
          <Navigation className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Activity Markers Preview */}
      <div className="absolute bottom-4 left-4 right-4">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">15 activities in this area</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MapView;