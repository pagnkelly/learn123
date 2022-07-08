import type { InjectionKey, Ref, UnwrapRef } from 'vue'
export type TabNavProperties = UnwrapRef<{
  label: string
  name: string
}>

export type PaneProperties = UnwrapRef<{
  uid: number
  props: TabNavProperties
  active: Boolean
}>
export interface TabsRootContext {
  props: any
  currentName: Ref<string | number>
  registerPane: (pane: PaneProperties) => void
  unregisterPane: (uid: number) => void
}
export const TabsContextKey: InjectionKey<TabsRootContext> = Symbol('TabsContextKey')

