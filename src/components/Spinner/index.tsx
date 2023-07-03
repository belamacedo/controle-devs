import * as Styles from "./styles";

export const Spinner = () => {
  return (
    <div className={Styles.container()}>
      <div className={Styles.spinner()}></div>
    </div>
  );
};
