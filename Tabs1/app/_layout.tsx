import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          href: 'home',
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="cadastro"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

//TelaA = sobre | TelaB cadastro