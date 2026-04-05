import Typography from "@/components/Typography/Typography";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.text}>
        <Typography variant="heading-1">Hey, I&apos;m</Typography>
        <Typography variant="heading-1" color="--primary">
          Jan Vališer
        </Typography>
        <Typography variant="heading-2">Mobile developer</Typography>
      </div>
      <div className={classes.image} />
    </section>
  );
};

export default Hero;
