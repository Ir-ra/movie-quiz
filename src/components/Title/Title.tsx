type TextType = {
  text: string;
};

export default function Title({ text }: TextType) {
  return (
    <>
      <h2 className="title">
        {text}
      </h2>
    </>
  )
}
