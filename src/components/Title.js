// <React.Fragment> kullandığımızda "React"i kesin import etmeliyiz.
// <React.Fragment>'ın key prop'ı yoksa <> </> şeklinde kullanabiliriz.

export default function Title({ title, subtitle }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <br />
      <h2 className="subtitle">{subtitle}</h2>
    </>
  );
}
