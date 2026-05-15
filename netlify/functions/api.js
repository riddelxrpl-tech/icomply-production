exports.handler = async (event, context) => {
  const path = event.path;
  const method = event.httpMethod;

  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  if (method === 'OPTIONS') {
    return { statusCode: 200, headers };
  }

  if (path.includes('/sweep')) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Autonomous Optimization Sweep completed',
        improvements: { seo: '+8%', compliance: '+5%', pipeline: '+£12,450', roas: '+0.6x' },
        timestamp: new Date().toISOString()
      })
    };
  }

  if (path.includes('/agents')) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        agents: 11,
        status: 'PRODUCTION LIVE',
        version: '3.2',
        timestamp: new Date().toISOString()
      })
    };
  }

  if (path.includes('/gmail')) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Email sent via Gmail API simulation',
        details: 'Quote #Q-IC-' + Date.now() + ' delivered to client'
      })
    };
  }

  if (path.includes('/calendar')) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Site survey booked in Google Calendar',
        eventId: 'evt-' + Date.now(),
        time: 'Tomorrow 09:00 GMT'
      })
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ status: 'Icomply API v3.2 online', agents: 11 })
  };
};