declare module "*.svg" {
  const SVGProps = React.ComponentProps<React.SVGAttributes<SVGElement>>
  export default React.ComponentType<SVGProps>
}
