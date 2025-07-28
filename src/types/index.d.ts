// src/types/index.d.ts

import React from 'react';

// Definindo o tipo para os ícones SVG, que são elementos JSX.
type FeatureIcon = React.ReactNode;

export interface Feature {
  id: string;
  icon: FeatureIcon;
  mainImage: string;
  title: string;
  subtitle: string;
  description: string;
}