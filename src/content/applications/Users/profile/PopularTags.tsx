import {
  Typography,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListSubheader,
  ListItemText,
  Avatar,
  useTheme,
  styled,
} from '@mui/material';

const ListWrapper = styled(List)(
  () => `
      .MuiListItem-root {
        border-radius: 0;
        margin: 0;
      }
`
);

function PopularTags() {
  const theme = useTheme();

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title="Popular Tags" />
      <Divider />
      <ListWrapper disablePadding>
        <ListItem
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` },
          }}
          button
          dense
          disableGutters
          secondaryAction={
            <Typography variant="body2" color="text.secondary">
              150 posts
            </Typography>
          }
        >
          <ListItemText primary="#HTML" />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` },
          }}
          button
          dense
          disableGutters
          secondaryAction={
            <Typography variant="body2" color="text.secondary">
              300 posts
            </Typography>
          }
        >
          <ListItemText primary="#software_development" />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` },
          }}
          button
          dense
          disableGutters
          secondaryAction={
            <Typography variant="body2" color="text.secondary">
              200 posts
            </Typography>
          }
        >
          <ListItemText primary="#TrendingInfuencers" />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` },
          }}
          button
          dense
          disableGutters
          secondaryAction={
            <Typography variant="body2" color="text.secondary">
              100 posts
            </Typography>
          }
        >
          <ListItemText primary="#investorsWatch2022" />
        </ListItem>
        <Divider />
        <ListSubheader>
          <Typography sx={{ py: 1.5 }} variant="h4" color="text.primary">
            Groups
          </Typography>
        </ListSubheader>
        <Divider />
        <ListItem
          button
          alignItems="flex-start"
          divider
          disablePadding
          secondaryAction={
            <Typography variant="body2" color="text.secondary">
              Active
            </Typography>
          }
        >
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                background: `${theme.colors.info.main}`,
                color: `${theme.palette.info.contrastText}`,
              }}
            >
              WD
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5',
              color: `${theme.colors.alpha.black[100]}`,
            }}
            primary="Web Designers Lounge"
            secondary="2 new messages"
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          alignItems="flex-start"
          divider
          disablePadding
          secondaryAction={
            <Typography variant="body2" color="text.secondary">
              Active
            </Typography>
          }
        >
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                background: `${theme.colors.alpha.black[100]}`,
                color: `${theme.colors.alpha.white[100]}`,
              }}
            >
              D
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5',
              color: `${theme.colors.alpha.black[100]}`,
            }}
            primary="Writer’s Digest Daily"
            secondary="5 new messages"
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          alignItems="flex-start"
          divider
          disablePadding
          secondaryAction={
            <Typography variant="body2" color="text.secondary">
              Active
            </Typography>
          }
        >
          <ListItemAvatar>
            <Avatar
              sx={{ width: 38, height: 38 }}
              src="/static/images/logo/google.svg"
            />
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5',
              color: `${theme.colors.alpha.black[100]}`,
            }}
            primary="Google Developers"
            secondary="10 new messages"
          />
        </ListItem>
      </ListWrapper>
    </Card>
  );
}

export default PopularTags;
