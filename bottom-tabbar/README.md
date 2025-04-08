# Setting Up Bottom Tabs Navigation

This guide walks through the process of creating bottom tab navigation in your React Native app.

## Step 1: Create the Tabs Directory Structure
Create a `(tabs)` folder inside your `/app` directory:
```bash
mkdir -p app/(tabs)
```

## Step 2: Move the Main Index File
Move your main index file into the tabs structure:
```bash
mv app/index.tsx app/(tabs)/index.tsx
```
> **Note**: This is important because this file serves as the startup screen for your application.

## Step 3: Create Additional Tab Screens
Create a new file for your second tab:
```bash
touch app/(tabs)/explore.tsx
```
You can use the `rnfs` command in your IDE to quickly generate the React Native functional component boilerplate.

## Step 4: Create a Layout File for Tabs
Add a layout file that will manage your tab navigation:
```bash
touch app/(tabs)/_layout.tsx
```

## Step 5: Configure Root Layout
Update your root layout file at `/app/_layout.tsx` to include the tabs configuration.

## Step 6: Verify Setup
Your directory structure should now look like this:
```
app/
├── _layout.tsx
├── (tabs)/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── explore.tsx
```

## Complete!
Your bottom tabs navigation is now set up and ready to use.