import React from 'react';
import Lottie from 'react-lottie';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import animationLoading from '../../screens/Quiz/animations/loading.json';

import Widget from '../Widget';

function LoadingWidget() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0, duration: 0.3 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>{`Bem vind@ ${name || '...'}!`}</Widget.Header>
      <Widget.Content>
        <Lottie
          width="100%"
          options={{
            animationData: animationLoading,
            loop: true,
          }}
        />
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
