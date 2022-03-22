import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import * as Progress from 'react-native-progress';

function Webview() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

  const javascript = `window.alert('Welcome to amazon')`;

  return (
    <>
      {!isLoaded ? (
        <Progress.Bar
          progress={progress}
          width={null}
          borderWidth={0}
          borderRadius={0}
          color="orange"
        />
      ) : null}

      <WebView
        source={{uri: 'https://amazon.com'}}
        //   onError={event =>
        //     alert(`Webview Error ${event.nativeEvent.description}`)
        //   }
        //   injectedJavaScriptBeforeContentLoaded={javascript}
        onLoadProgress={event => setProgress(event.nativeEvent.progress)}
        onLoadEnd={() => setLoaded(true)}
      />
    </>
  );
}

export default Webview;
