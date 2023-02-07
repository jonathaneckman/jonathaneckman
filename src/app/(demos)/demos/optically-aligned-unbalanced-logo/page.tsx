import logo from "@/../public/demos/optically-aligned-unbalanced-logo/unbalanced-logo.png";
import Image from "next/image";
import "./optically-aligned-unbalanced-logo.css";

const OpticallyAlignedUnbalancedLogo = () => {
  return (
    <nav
      style={{
        alignItems: "center",
      }}
    >
      <Image src={logo} alt="Incorpta logo" height={50} />
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Careers</a>
    </nav>
  );
};

const MathematicallyCenterAlignedUnbalancedLogo = () => {
  return (
    <nav
      style={{
        alignItems: "flex-end",
      }}
    >
      <Image src={logo} alt="Incorpta logo" height={50} />
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Careers</a>
    </nav>
  );
};

const MathematicallyBottomAlignedUnbalancedLogo = () => {
  return (
    <nav
      style={{
        alignItems: "center",
      }}
    >
      <Image src={logo} alt="Incorpta logo" height={50} />
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Careers</a>
    </nav>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <hr />
      {children}
    </div>
  );
};

export default function OpticallyAlignedUnbalancedLogoDemo() {
  return (
    <>
      <Container>
        <MathematicallyBottomAlignedUnbalancedLogo />
      </Container>
      <Container>
        <OpticallyAlignedUnbalancedLogo />
      </Container>
      <Container>
        <MathematicallyCenterAlignedUnbalancedLogo />
      </Container>
    </>
  );
}
