<script lang="ts">
  import { Switch } from "$lib/components/ui/switch";
  import { Label } from "$lib/components/ui/label";
  import * as Avatar from "$lib/components/ui/avatar";
  import * as Sheet from "$lib/components/ui/sheet";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
	import { browser } from "$app/environment";
  export let theme;

  import { page } from '$app/stores';

  let switchState = theme === 'dark';

  $: {
    if (browser) {
      const colorScheme = switchState ? 'dark' : 'light';
      document.cookie = `theme=${colorScheme}; max-age=${60*60*24*30}; Path=/`;
      document.documentElement.dataset.theme = colorScheme;
    }
  }
</script>

<header class="shadow-lg" class:is-absolute={$page.route.id?.includes('(auth)')}>
  <div class="inner max-w-screen-xl py-4 mx-auto flex justify-between items-center">

    <h1 class="text-2xl">datA&pi;</h1>

    {#if !$page.route.id?.includes('(auth)') }
      <nav>
        <ul class="flex gap-6">
          <li><a href="/">Home</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
    {/if}
    
    <div id="settings-drawer" class="flex items-center justify-end gap-4">
      <Switch id="theme" bind:checked={switchState} />
      <!-- <Label for="theme">{ currentTheme }</Label> -->
      {#if !$page.route.id?.includes('(auth)') }
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button builders={[builder]} variant="invisible">
            <Avatar.Root>
              <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
          </Button>
        </Sheet.Trigger>
        <Sheet.Content side="right">
          <Sheet.Header>
            <Sheet.Title>Edit profile</Sheet.Title>
            <Sheet.Description>
              Make changes to your profile here. Click save when you're done.
            </Sheet.Description>
          </Sheet.Header>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">Name</Label>
              <Input id="name" value="Pedro Duarte" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right">Username</Label>
              <Input id="username" value="@peduarte" class="col-span-3" />
            </div>
          </div>
          <Sheet.Footer>
            <Sheet.Close asChild let:builder>
              <Button builders={[builder]} type="submit">Save changes</Button>
            </Sheet.Close>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
      {/if}
    </div>

  </div>
</header>

<style lang="postcss">
  .is-absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
  }
</style>
