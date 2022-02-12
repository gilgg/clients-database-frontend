const Input = ({ valType, val, setVal }) => {
  return (
    <input
      type="text"
      placeholder={`Enter your ${valType}`}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      required
    />
  );
};

export default Input;
