import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Play, FastForward, Pause, UploadCloud } from "lucide-react";

const PodcastPlatform = () => {
  const [podcastTitle, setPodcastTitle] = useState('');
  const [podcastDescription, setPodcastDescription] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [generatedPodcast, setGeneratedPodcast] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [coverArt, setCoverArt] = useState(null);

  const handleGeneratePodcast = async () => {
    // TODO: Implement podcast generation using selected AI model
    console.log('Generating podcast with:', { podcastTitle, podcastDescription, selectedModel });
    // For now, we'll simulate a generated podcast
    setGeneratedPodcast({
      title: podcastTitle,
      description: podcastDescription,
      audioUrl: 'https://example.com/sample-podcast.mp3',
      duration: 300, // 5 minutes in seconds
    });
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFastForward = () => {
    setCurrentTime(Math.min(currentTime + 30, generatedPodcast.duration));
  };

  const handleSliderChange = (newValue) => {
    setCurrentTime(newValue[0]);
  };

  const handleCoverArtUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCoverArt(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI Podcast Platform</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Create New Podcast</CardTitle>
          <CardDescription>Generate a podcast using AI</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Podcast Title"
              value={podcastTitle}
              onChange={(e) => setPodcastTitle(e.target.value)}
            />
            <Textarea
              placeholder="Podcast Description"
              value={podcastDescription}
              onChange={(e) => setPodcastDescription(e.target.value)}
            />
            <Select onValueChange={setSelectedModel}>
              <SelectTrigger>
                <SelectValue placeholder="Select AI Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="groq-llama3">GROQ LLaMA3-8B-8192</SelectItem>
                <SelectItem value="claude-sonnet">Anthropic Claude Sonnet 3.5</SelectItem>
                <SelectItem value="claude-opus">Claude Anthropic Opus</SelectItem>
                <SelectItem value="elevanlab">ElevanLab</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <label htmlFor="cover-art" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Cover Art
              </label>
              <div className="flex items-center">
                <Input
                  id="cover-art"
                  type="file"
                  accept="image/*"
                  onChange={handleCoverArtUpload}
                  className="hidden"
                />
                <Button onClick={() => document.getElementById('cover-art').click()}>
                  <UploadCloud className="mr-2 h-4 w-4" /> Upload Image
                </Button>
                {coverArt && <img src={coverArt} alt="Cover Art" className="ml-4 h-16 w-16 object-cover rounded" />}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGeneratePodcast}>Generate Podcast</Button>
        </CardFooter>
      </Card>

      {generatedPodcast && (
        <Card>
          <CardHeader>
            <CardTitle>{generatedPodcast.title}</CardTitle>
            <CardDescription>{generatedPodcast.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <Button onClick={handlePlayPause}>
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button onClick={handleFastForward}>
                <FastForward className="h-4 w-4" />
              </Button>
            </div>
            <Slider
              max={generatedPodcast.duration}
              step={1}
              value={[currentTime]}
              onValueChange={handleSliderChange}
            />
            <div className="text-sm text-gray-500 mt-2">
              {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')} / 
              {Math.floor(generatedPodcast.duration / 60)}:{(generatedPodcast.duration % 60).toString().padStart(2, '0')}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PodcastPlatform;
