<script lang="ts">
  import { buttonVariants, Button } from "$lib/components/ui/button";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Card from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";

  export let form;
</script>

<div class="container min-h-screen grid place-items-center">
  <div class="inner overflow-hidden">
    {#if form?.success}
    <p>Success!</p>
    {/if}
    <Tabs.Root value="login" class="w-[400px]">
      <Tabs.List class="grid w-full grid-cols-2">
        <Tabs.Trigger value="login">Log In</Tabs.Trigger>
        <Tabs.Trigger value="register">Register</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="login">
        <Card.Root>
          <Card.Header>
            <Card.Title>Log In</Card.Title>
            <Card.Description>
              Enter your email and password to log in.
            </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="email-login">Email</Label>
              <Input id="email-login" />
            </div>
            <div class="space-y-1">
              <Label for="password-login">Password</Label>
              <Input id="password-login" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Log In</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content value="register">
        <Card.Root>
          <Card.Header>
            <Card.Title>Register</Card.Title>
            <Card.Description>
              Enter your email address and a password to Register.
            </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="email-register">Email</Label>
              <Input id="email-register" type="email" />
            </div>
            <div class="space-y-1">
              <Label for="password-register">Password</Label>
              <Input id="password-register" type="password" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Sign Up</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  </div>
</div>

<style lang="postcss">
  /* :global(header) {
    display: none;
  } */
</style>
