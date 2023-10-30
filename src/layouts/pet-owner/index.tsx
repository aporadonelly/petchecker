import { useMemo } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MedicationIcon from '@mui/icons-material/Medication';
import PetsIcon from '@mui/icons-material/Pets';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

import PageLayout from '@/components/page-layout';

function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = useMemo(
    () => [
      {
        label: 'Home',
        icon: <HomeIcon />,
        selected: location.pathname === '/pet-owner',
        onClick: () => navigate('/pet-owner'),
      },
      {
        label: 'Consultation',
        icon: <MedicationIcon />,
        selected: location.pathname === '/pet-owner/consultation',
        onClick: () => navigate('/pet-owner/consultation'),
      },
      {
        label: 'My Pets',
        icon: <PetsIcon />,
        selected: location.pathname === '/pet-owner/pets',
        onClick: () => navigate('/pet-owner/pets'),
      },
      {
        label: 'Billing',
        icon: <ReceiptIcon />,
        selected: location.pathname === '/pet-owner/billing',
        onClick: () => navigate('/pet-owner/billing'),
      },
      {
        label: 'Help & Info',
        icon: <HelpCenterIcon />,
        selected: location.pathname === '/pet-owner/help',
        onClick: () => navigate('/pet-owner/help'),
      },
      {
        label: 'Preventions',
        icon: <PrivacyTipIcon />,
        selected: location.pathname === '/pet-owner/preventions',
        onClick: () => navigate('/pet-owner/preventions'),
      },
    ],
    [navigate, location.pathname]
  );

  return (
    <PageLayout
      sidebarProps={{
        items: sidebarItems,
      }}
    >
      <Outlet />
    </PageLayout>
  );
}

export default AdminLayout;
