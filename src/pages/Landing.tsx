import { Link } from 'react-router-dom';

import classNames from 'classnames';
import styles from './pages.module.css';
import { Hero } from "@/components/atoms";
//import Blob from '@/components/atoms/Blob/Blob';

export default function Landing() {
  return (
    <section className="w-full min-h-[80dvh] flex items-center">



      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 animated-fade__reverse">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight capitalize">
            Texto inspirador
          </h1>
          <p className="text-muted-foreground text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum aliquam assumenda, vitae ducimus ipsa impedit animi! Unde nobis inventore quis possimus suscipit consectetur veritatis dolores ipsa?
          </p>
          <div className="flex gap-4">
            <Link
              to="/home"
              className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none text-popover disabled:opacity-50'
              referrerPolicy="no-referrer-when-downgrade"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className='inline-flex h-10 px-6 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              referrerPolicy="no-referrer-when-downgrade"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div
          className={classNames(
            'mx-auto rounded-xl overflow-hidden object-cover object-center aspect-[4/3] animated-fade__reverse',
            styles.border_image,
          )}
        >
          <Hero />
        </div>
      </div>
    </section>
  );
}
