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
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          height: "20px",
        }}
      >
        <Image src={logo} alt="Incorpta logo" height={30} />
      </div>
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
        alignItems: "center",
      }}
    >
      <Image src={logo} alt="Incorpta logo" height={30} />
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
        alignItems: "flex-end",
      }}
    >
      <Image src={logo} alt="Incorpta logo" height={30} />
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Careers</a>
    </nav>
  );
};

const Container = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <p>{label}</p>
      <div className="container">{children}</div>
    </>
  );
};

export default function OpticallyAlignedUnbalancedLogoDemo() {
  return (
    <>
      <Container label="Mathematically aligned center">
        <MathematicallyCenterAlignedUnbalancedLogo />
      </Container>
      <Container label="Mathematically aligned bottom">
        <MathematicallyBottomAlignedUnbalancedLogo />
      </Container>
      <Container label="Optically aligned">
        <OpticallyAlignedUnbalancedLogo />
      </Container>
    </>
  );
}
