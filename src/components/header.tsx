"use client"

import * as React from "react"
import Link from "next/link"


import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export default function NavigationMenuDemo() {
  return (
    <div className="flex text-center">
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink> 
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">About Us</Link>
          </NavigationMenuLink> 
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/contact">Contact Us</Link>
          </NavigationMenuLink> 
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu></div>
  )
}


