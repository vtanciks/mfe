import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  const mountConfig = {
    onNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, mountConfig);

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
