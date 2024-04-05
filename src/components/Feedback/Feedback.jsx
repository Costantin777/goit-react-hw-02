import css from "/src/components/Feedback/Feedback.module.css";

export default function Feedback({ state, total, positive }) {
  return (
    <div className={css.feedbackList}>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}
