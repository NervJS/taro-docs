declare module '*.svg' {
  const SVGProps = React.ComponentProps<React.SVGAttributes<SVGElement>>
  export default React.ComponentType<SVGProps>
}

declare module '@docusaurus/*'
declare module '@site/static/*'
