import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import GlassCard from "./GlassCard";

interface HealthHubEmbedProps {
  onBack: () => void;
}

const HealthHubEmbed = ({ onBack }: HealthHubEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Set a timeout to stop loading after 10 seconds if iframe doesn't load
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setHasError(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <GlassCard className="w-full h-full max-w-7xl max-h-[90vh] overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-glass-border bg-glass/50">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Back to Projects</span>
              </button>
              <div className="w-px h-6 bg-glass-border" />
              <h2 className="text-lg font-medium text-glass-foreground">
                Health Hub Website - Live Demo
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/shurui7/HealthHubUDEM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 text-sm bg-glass border border-glass-border rounded-md hover:bg-primary/10 transition-colors"
              >
                <Github size={14} />
                <span>Source Code</span>
              </a>
              <a
                href="http://localhost:3001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 text-sm bg-primary/20 text-primary-foreground rounded-md hover:bg-primary/30 transition-colors"
              >
                <ExternalLink size={14} />
                <span>Open in New Tab</span>
              </a>
            </div>
          </div>

          {/* Iframe Container */}
          <div className="flex-1 relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-glass z-10">
                <div className="text-center space-y-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="text-muted-foreground text-sm">
                    Loading Health Hub Website...
                  </p>
                  <p className="text-xs text-muted-foreground max-w-md px-4">
                    Starting the Health Hub development server. This may take a moment.
                  </p>
                </div>
              </div>
            )}
            
            {hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-glass z-10">
                <div className="text-center space-y-4 max-w-md px-4">
                  <div className="text-red-500 text-2xl">⚠️</div>
                  <p className="text-muted-foreground text-sm">
                    Health Hub website is not running
                  </p>
                  <p className="text-xs text-muted-foreground">
                    To view the live website, please run the Health Hub server:
                  </p>
                  <div className="bg-muted p-3 rounded-md text-xs font-mono text-left">
                    cd Websites/HealthHubUDEM<br/>
                    npm install<br/>
                    npm start
                  </div>
                  <p className="text-xs text-muted-foreground">
                    The website should be available at http://localhost:3001
                  </p>
                </div>
              </div>
            )}
            
            <iframe
              src="http://localhost:3001"
              className="w-full h-full border-0"
              title="Health Hub Website"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{ 
                background: 'white',
                minHeight: '100%'
              }}
            />
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default HealthHubEmbed;
