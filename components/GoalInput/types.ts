export interface IProps {
  visible: boolean;
  onCancel(): void;
  onAddGoal(goalTitle: string): void;
}
