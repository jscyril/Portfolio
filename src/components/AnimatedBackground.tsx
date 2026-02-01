import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="animated-bg">
            {/* Gradient Orbs */}
            <motion.div
                className="orb orb-1"
                animate={{
                    x: [0, 50, -30, 40, 0],
                    y: [0, -50, 30, 20, 0],
                    scale: [1, 1.1, 0.95, 1.05, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="orb orb-2"
                animate={{
                    x: [0, -40, 60, -20, 0],
                    y: [0, 40, -30, 50, 0],
                    scale: [1, 0.9, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="orb orb-3"
                animate={{
                    x: [0, 30, -50, 20, 0],
                    y: [0, -40, 20, -30, 0],
                    scale: [1, 1.05, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Mesh Gradient Overlay */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `
            radial-gradient(at 20% 80%, rgba(124, 58, 237, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(168, 85, 247, 0.1) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(192, 132, 252, 0.05) 0px, transparent 50%)
          `,
                }}
            />

            {/* Noise texture overlay for depth */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
