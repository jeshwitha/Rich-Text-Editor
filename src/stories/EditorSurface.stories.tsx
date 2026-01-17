import type { Meta, StoryObj } from '@storybook/react';
import { EditorSurface } from '../editor/EditorSurface';

const meta: Meta<typeof EditorSurface> = {
  title: 'Editor/EditorSurface',
  component: EditorSurface,
};

export default meta;

type Story = StoryObj<typeof EditorSurface>;

export const Default: Story = {};

export const KeyboardOnly: Story = {
  name: 'Keyboard only usage',
};

export const EmptyState: Story = {
  name: 'Empty editor',
};
export const LongContent: Story = {
  name: 'Long content stress test',
};

export const FocusBehavior: Story = {
  name: 'Focus and keyboard navigation',
};
