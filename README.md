Install the dependencies
npm install
Installation

run the init script to specify your application name. It's gonna prompt you for your app name and a slug name
npm run init
Install the bundler dependency through gem
gem install bundler
Install the required native dependency files
npm run install-ios-libs
Run the app
react-native run-ios
Start the application in ejected mode
npm run ios-native
Start the app in unejected version
npm run ios-expo
Running the app in android devices

perform steps 1 and 2 , the same as mentioned above for iOS devices

Installation

run the init script to specify your application name. It's gonna prompt you for your app name and a slug name
npm run init
Run this gradlew command to build and sync your app manually
cd android && ./gradlew installDebug
Open the android folder of your app in Android Studio.

Hit the Run button

Start the application in ejected mode

npm run android-native
Start the app in unejected version
npm run android-expo
Running the app in web browser

Start the app in web
npm run web-expo
