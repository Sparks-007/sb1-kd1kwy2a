"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { BarChart2, Loader2 } from 'lucide-react';
import { MetricTooltip } from './metric-tooltip';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FormData } from '@/types/backlink';

const WEBSITE_NICHES = [
  "Technology",
  "Health & Wellness",
  "Finance",
  "Education",
  "E-commerce",
  "Travel",
  "Food & Dining",
  "Entertainment",
  "Sports",
  "Real Estate",
  "Fashion",
  "Automotive",
  "Business",
  "Marketing",
  "Lifestyle",
  "Other"
];

interface BacklinkFormProps {
  formData: FormData;
  loading: boolean;
  onSubmit: () => void;
  onChange: (data: FormData) => void;
}

export function BacklinkForm({ formData, loading, onSubmit, onChange }: BacklinkFormProps) {
  const [showAnchorText, setShowAnchorText] = useState(false);
  const [localAnchorText, setLocalAnchorText] = useState(formData.anchorText);

  useEffect(() => {
    setLocalAnchorText(formData.anchorText);
  }, [formData.anchorText]);

  const handleAnchorTextToggle = (checked: boolean) => {
    setShowAnchorText(checked);
    if (!checked) {
      onChange({ ...formData, anchorText: '' });
      setLocalAnchorText('');
    }
  };

  const handleAnchorTextChange = (value: string) => {
    const trimmedValue = value.slice(0, 100);
    setLocalAnchorText(trimmedValue);
    onChange({ ...formData, anchorText: trimmedValue });
  };

  return (
    <Card className="p-6 space-y-6 bg-white/50 dark:bg-gray-900/50 shadow-lg transition-all hover:shadow-xl border border-gray-100/50 dark:border-gray-800/50 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <BarChart2 className="w-6 h-6" />
        Input Metrics
      </h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-gray-900 dark:text-gray-100">Your Website Niche *</Label>
            <MetricTooltip metricKey="nicheRelevance" />
          </div>
          <Select
            value={formData.websiteNiche}
            onValueChange={(value) => onChange({ ...formData, websiteNiche: value })}
            disabled={loading}
          >
            <SelectTrigger className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <SelectValue placeholder="Select your website niche" />
            </SelectTrigger>
            <SelectContent>
              {WEBSITE_NICHES.map((niche) => (
                <SelectItem key={niche} value={niche}>
                  {niche}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-gray-900 dark:text-gray-100">Domain Authority (0-100)</Label>
            <MetricTooltip metricKey="domainAuthority" />
          </div>
          <Input
            type="number"
            min="0"
            max="100"
            value={formData.domainAuthority}
            onChange={(e) => onChange({ ...formData, domainAuthority: Number(e.target.value) })}
            disabled={loading}
            className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-gray-900 dark:text-gray-100">Monthly Traffic</Label>
            <MetricTooltip metricKey="trafficValue" />
          </div>
          <Input
            type="number"
            min="0"
            value={formData.trafficValue}
            onChange={(e) => onChange({ ...formData, trafficValue: Number(e.target.value) })}
            disabled={loading}
            className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-gray-900 dark:text-gray-100">Niche Relevance (0-10)</Label>
            <MetricTooltip metricKey="nicheRelevance" />
          </div>
          <div className="pt-2">
            <Slider
              min={0}
              max={10}
              step={0.1}
              value={[formData.nicheRelevance]}
              onValueChange={(value) => onChange({ ...formData, nicheRelevance: value[0] })}
              className="py-4"
              disabled={loading}
            />
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center mt-1">
              {formData.nicheRelevance.toFixed(1)}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <Label className="text-gray-900 dark:text-gray-100">DoFollow Link</Label>
            <MetricTooltip metricKey="doFollow" />
          </div>
          <Switch
            checked={formData.doFollow}
            onCheckedChange={(checked) => onChange({ ...formData, doFollow: checked })}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-gray-900 dark:text-gray-100">Include Anchor Text</Label>
            <Switch
              checked={showAnchorText}
              onCheckedChange={handleAnchorTextToggle}
              disabled={loading}
            />
          </div>
          
          {showAnchorText && (
            <div className="space-y-2 animate-in slide-in-from-top">
              <Label className="text-sm text-gray-600 dark:text-gray-400">Anchor Text</Label>
              <Input
                value={localAnchorText}
                onChange={(e) => handleAnchorTextChange(e.target.value)}
                placeholder="Enter anchor text"
                disabled={loading}
                maxLength={100}
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
              <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
                {localAnchorText.length}/100
              </div>
            </div>
          )}
        </div>

        <Button 
          className="w-full"
          onClick={onSubmit}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Calculating...
            </>
          ) : (
            'Calculate Score'
          )}
        </Button>
      </div>
    </Card>
  );
}